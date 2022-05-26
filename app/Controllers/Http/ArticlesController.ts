import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from '../../Models/Article'

export default class ArticlesController {
    public async index({ inertia }: HttpContextContract) {
        const articles = await Article.all()

        return inertia.render('Articles/List', { articles })
    }

    public async create({ inertia }: HttpContextContract) {
        return inertia.render('Articles/Add')
    }

    public async store({ response, request }: HttpContextContract) {
        await Article.create(request.body())

        return response.redirect().toPath('/articles')
    }

    public async show({}: HttpContextContract) {}

    public async edit({}: HttpContextContract) {}

    public async update({}: HttpContextContract) {}

    public async destroy({}: HttpContextContract) {}
}
