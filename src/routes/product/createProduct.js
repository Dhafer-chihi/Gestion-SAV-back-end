const { Product } = require("../../db/sequelize")

module.exports = (app)=>{
    app.post('/api/products' , (req , res)=>{
        Product.create(req.body).then(product=>{
            const message = `Le produit ${req.body.nom} a bien été crée`
            res.json({message , data : product})
        })
    })
}