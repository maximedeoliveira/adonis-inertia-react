import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from '../../Models/Article'

export default class ArticlesController {
    public async index({ inertia }: HttpContextContract) {
        const articles = await Article.query().preload('user')

        return inertia.render('Articles/List', { articles })
    }

    public async create({ inertia }: HttpContextContract) {
        return inertia.render('Articles/Add')
    }

    public async store({ response, request, auth }: HttpContextContract) {
        const article = await Article.create(request.body())
        await article.related('user').associate(auth.user)

        return response.redirect().toPath('/articles')
    }

    public async show({ inertia, params }: HttpContextContract) {
        const article = await Article.query()
            .preload('user')
            .where('id', params.id)
            .firstOrFail()

        return inertia.render('Articles/Show', { article })
    }

    public async edit({ inertia, params }: HttpContextContract) {
        const article = await Article.query()
            .preload('user')
            .where('id', params.id)
            .firstOrFail()

        return inertia.render('Articles/Edit', { article })
    }

    public async update({
        response,
        params,
        request,
        auth,
    }: HttpContextContract) {
        const article = await Article.query()
            .preload('user')
            .where('id', params.id)
            .firstOrFail()

        if (article.userId !== auth.user.id) {
            return response.unauthorized()
        }

        await article.merge(request.body()).save()

        return response.redirect().toPath(`/articles/${article.id}`)
    }

    public async destroy({ response, params, auth }: HttpContextContract) {
        const article = await Article.query()
            .preload('user')
            .where('id', params.id)
            .firstOrFail()

        if (article.userId !== auth.user.id) {
            return response.unauthorized()
        }

        await article.delete()

        return response.redirect().toPath('/articles')
    }
}
