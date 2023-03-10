const { Product } = require("../../db/sequelize")

module.exports = (app)=>{
    app.delete('/api/products/:id' , (req , res)=>{
        Product.findByPk(req.params.id).then(product=>{
            const productDelete = product
            Product.destroy({where : {id : product.id}})
            const message = `Le produit ${product.nom} a bien été supprimé`
            res.json({message , data : productDelete})
        })
    })
}