const { Product } = require("../../db/sequelize")

module.exports = (app)=>{
    app.put('/api/products/:id' , (req , res)=>{
        const id = req.params.id
        Product.update(req.body ,{where : {id : id}}).then(_ =>{
            Product.findByPk(id).then(product=>{
                const message = `Le produit a bien été modifié`
                res.json({message , data : product})
            })
        })
    })
}