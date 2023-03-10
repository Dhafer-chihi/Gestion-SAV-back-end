const {Client} = require('../../db/sequelize')
const auth = require('../../auth/auth')

module.exports = (app)=>{
    app.get('/api/clients/:id' , auth , (req , res)=>{
        Client.findByPk(req.params.id).then(client=>{
            const message = 'Le client a bien été trouvé'
            res.json({message , data : client})
        })
        
    }) 
}