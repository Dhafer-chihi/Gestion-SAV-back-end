const {Article} = require('../../db/sequelize')
module.exports = (app)=>{
    app.get('/api/articles' , (req , res)=>{
        Article.findAll().then(articles=>{
            const message = 'La liste des articles a bien été récuperé'
            res.json({message , data:articles})
        })
    })
}