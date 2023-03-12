const {Article} = require('../../db/sequelize')

module.exports = (app)=>{
    app.get('/api/articles/:id' , (req , res)=>{
        Article.findByPk(req.params.id).then(article=>{
            const message = `L'article ${article.nom} a bien été trouvé`
            res.json({message , data : article})
        })
    })
}