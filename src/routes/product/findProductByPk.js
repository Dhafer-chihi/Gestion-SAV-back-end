const { Product } = require("../../db/sequelize")

module.exports = (app)=>{
    app.get('/api/products/:id' , (req ,res)=>{
        Product.findByPk(req.params.id).then(product=>{
            const message = `Le produit ${product.nom} a bien été trouvé`
            res.json({message , data : product})
        })
    })
}