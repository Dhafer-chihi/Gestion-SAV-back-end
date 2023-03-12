//Declaration des paquets a partir de package.json.
const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const sequelize = require('./src/db/sequelize')

//Appel du model client

// Déclarer des méthodes dans le fichier hepler 
// const {success , getUniqueId} = require('./helper')

// Déclaration des données des clients 

// Appel de app a partir de express
const app = express()
// le port utilser pour l'API
const port = process.env.PORT || 3000





//middleware (favicon , morgan , bodyParser)
//favicon : pour modifier l'icone de l'onglet
//morgan : afficher "GET /api/clients 304 0.347 ms - -" au terminal
//badyParser
app
    .use(favicon(__dirname +'/favicon.ico'))
    .use(bodyParser.json())

sequelize.initDb()

app.get('/', (req, res)=>{
    res.json('Hello, Heroku !👋')
})

//Nos points de terminison de client
require('./src/routes/client/findAllClients')(app)
require('./src/routes/client/findClientByPk')(app)
require('./src/routes/client/createClient')(app)
require('./src/routes/client/updateClient')(app)
require('./src/routes/client/deleteClient')(app)


//Nos points de terminison de l'entreprise


//Nos points de terminison de produit
require('./src/routes/product/findAllProducts')(app)
require('./src/routes/product/findProductByPk')(app)
require('./src/routes/product/deleteProduct')(app)
require('./src/routes/product/createProduct')(app)
require('./src/routes/product/updateProduct')(app)

//Nos points de terminison de l'article
require('./src/routes/article/findAllArticles')(app)
require('./src/routes/article/findArticleByPk')(app)

//Nos points de terminison de l'ulilisateur 

require('./src/routes/user/login')(app)




// Gestion des erreurs 404
app.use(({res})=>{
    const message = 'Impossible de trouvée la ressource demandée ! Vous pouvez assayer un autre URL.'
    res.status(404).json({message})
})

//La creation de l'url avec le port de l'affichage de l'API
app.listen(port , ()=>console.log(`Notre application est demarrée sur : http://localhost:${port}`))