const {Client} = require('../../db/sequelize')
const auth = require('../../auth/auth')

module.exports = (app)=>{
    app.post('/api/clients' , auth , (req , res)=>{
        Client.create(req.body).then(client=>{
            const message = `Le client ${req.body.nom} ${req.body.prenom} a bien été crée.`
            res.json({message , data : client})
        })
    })
}