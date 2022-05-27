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

    public async show({ inertia, params }: HttpContextContract) {
        const article = await Article.find(params.id)

        return inertia.render('Articles/Show', { article })
    }

    public async edit({ inertia, params }: HttpContextContract) {
        const article = await Article.find(params.id)

        return inertia.render('Articles/Edit', { article })
    }

    public async update({ response, params, request }: HttpContextContract) {
        const article = await Article.findOrFail(params.id)
        await article.merge(request.body()).save()

        return response.redirect().toPath(`/articles/${article.id}`)
    }

    public async destroy({ response, params }: HttpContextContract) {
        const article = await Article.findOrFail(params.id)
        await article.delete()

        return response.redirect().toPath('/articles')
    }
}
