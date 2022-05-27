import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class ArticlesController {
    public async loginForm({ inertia }: HttpContextContract) {
        return inertia.render('Auth/Login')
    }

    public async login({ response, request, auth }: HttpContextContract) {
        await auth.attempt(request.input('email'), request.input('password'))

        return response.redirect().toPath('/')
    }

    public async registerForm({ inertia }: HttpContextContract) {
        return inertia.render('Auth/Register')
    }

    public async register({ auth, response, request }: HttpContextContract) {
        const user = await User.create(request.body())

        await auth.use('web').login(user)

        return response.redirect().toPath('/')
    }

    public async logout({ auth, response }: HttpContextContract) {
        await auth.use('web').logout()

        return response.redirect().toPath('/')
    }
}
