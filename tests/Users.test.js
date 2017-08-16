var User = require('../models/User')

describe('Users', function () {

    test('email is required', function () {
    var user = new User()
    var error = user.validateSync()

    expect(error).not.toBeUndefined()
    expect(error.errors.emailAddress.message).toBe('Email address is required.')
}),

    test('password is required', function (){
    var user = new User()
    var error = user.validateSync()

    expect(error).not.toBeUndefined()
    expect(error.errors.password.message).toBe('Password is required')
}),

    test('Check email address is valid', function (){
        var user = new User({emailAddress: 'hello!'})
        var error = user.validateSync()

        expect(error).not.toBeUndefined()
        expect(error.errors.emailAddress.message).toBe('Email address isn\'t valid')
    }),

    test('login requests user with matching email address and password', function (){
        var spy = spyOn(User, 'findOne')
        var user = {
             emailAddress: 'hello@world.com',
             password: 'password123' 
         }

        var callback = jest.fn()
        User.login(user, callback)
        expect(spy).toHaveBeenCalledWith(user, callback)

    })
})