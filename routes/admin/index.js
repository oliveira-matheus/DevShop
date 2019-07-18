const init = db => {

    //const products = require('./products')
    const categories = require('./categories')
    const router = require('express').Router()
    //autorização
    /*router.use((req, res, next) => {
        if(req.session.user){
            if(req.session.user.roles.indexOf('admin') < 0){
                res.redirect('/')
            }else{
                next()
            }
        }else{ 
            res.redirect('/login')
        }
    })
*/
    router.get('/', (req, res) => res.render('admin/index'))
    router.use('/categorias', categories(db))
    //router.use('/product', products(db))
    return router
}

module.exports = init