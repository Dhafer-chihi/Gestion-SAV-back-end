const {Client} = require('../../db/sequelize')
const auth = require('../../auth/auth')

module.exports = (app)=>{
    app.get('/api/clients' , auth ,  (req , res)=>{
       Client.findAll().then(clients=>{
        const message = 'La liste des client a été bien récupérée'
        res.json({message , data : clients})
       })
    })
}