const {Client} = require('../../db/sequelize')
const auth = require('../../auth/auth')

module.exports = (app)=>{
    app.put('/api/clients/:id' , auth , (req , res)=>{
        const id = req.params.id

        Client.update(req.body ,{where:{id : id}})
            .then(_ =>{Client.findByPk(id).then(client=>{
                const message = `Le client ${client.nom}${client.prenom} a bien été modifié` 
                res.json({message , data : client})
            })
                    
        })
    })
}