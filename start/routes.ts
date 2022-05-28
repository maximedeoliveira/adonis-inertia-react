/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'ArticlesController.index')

// Articles
Route.resource('articles', 'ArticlesController').middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth'],
})

// Login
Route.get('/login', 'AuthController.loginForm').middleware('guest')
Route.post('/login', 'AuthController.login').middleware('guest')

// Logout
Route.get('/logout', 'AuthController.logout').middleware('auth')

// Register
Route.get('/register', 'AuthController.registerForm').middleware('guest')
Route.post('/register', 'AuthController.register').middleware('guest')
