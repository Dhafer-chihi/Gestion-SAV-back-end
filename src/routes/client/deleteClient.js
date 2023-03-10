const {Client} = require('../../db/sequelize')
const auth = require('../../auth/auth')

module.exports = (app)=>{
    app.delete('/api/clients/:id',auth , (req , res)=>{
        Client.findByPk(req.params.id).then(client=>{
            const clientDeleted = client;
            Client.destroy({where : {id:client.id}})
            const message = `Le client ${client.nom} ${client.prenom} a bien été supprimer`
            res.json({message , data: clientDeleted})
        })
    })
}