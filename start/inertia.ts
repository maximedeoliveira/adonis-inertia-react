/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia'

Inertia.share({
    errors: (ctx) => {
        return ctx.session.flashMessages.get('errors')
    },
    user: async (ctx) => {
        await ctx.auth.use('web').check()

        if (ctx.auth.isLoggedIn) {
            return ctx.auth.use('web').user
        }

        return null
    },
}).version(() => Inertia.manifestFile('public/assets/manifest.json'))
