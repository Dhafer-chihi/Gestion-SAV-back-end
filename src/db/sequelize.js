const {Sequelize ,  DataTypes} = require('sequelize')
const ClientModel = require('../models/client')
const ProductModel = require('../models/product')
const UserModel = require('../models/user')
const ArticleModel = require('../models/article')
const bcrypt = require('bcrypt')


const products = require('./product')
const clients = require('./client')
const articles = require('./article')




// la declaration de notre connexion a la base de bonnée
const sequelize = new Sequelize(
    'itest',
    'root',
    '',
    {
        host : 'localhost',
        dialect : 'mariadb',
        dialectOptions : {
            timezone : 'Etc/GMT-2'
        },
        logging : true
    }
)

// l'injection des donnée du fichier "data.js" a la base de bonnée

const Client = ClientModel(sequelize , DataTypes)
const Product = ProductModel(sequelize , DataTypes)
const User = UserModel(sequelize , DataTypes )
const Article = ArticleModel(sequelize , DataTypes)

const initDb = ()=>{
    return sequelize.sync({force : true}).then(_ => {

        
        clients.map(client=>{
            Client.create({
                
                nom : client.nom , 
                prenom : client.prenom , 
                mobile : client.mobile , 
                email : client.email,
            }).then(client=>console.log(client.toJSON()))
        }),



        products.map(product=>{
            Product.create({
                nom : product.nom , 
                sn : product.sn , 
                categorie : product.categorie ,
                accessoire : product.accessoire ,
                diagnostic_client : product.diagnostic_client,
                diagnostic_tech : product.diagnostic_tech, 

            }).then(product => console.log(product.toJSON()))

        }),

        articles.map(article=>{
            Article.create({
                reference : article.reference , 
                nom : article.nom ,
                description : article.description 

            }).then(article => console.log(article.toJSON()))
        }),


        bcrypt.hash('user' , 10)
            .then(hash=> User.create({ username : 'user',password : hash}))
            .then(user => console.log(user.toJSON()))

        

        console.log('La base de donnée a bien été initialisée !')

    })
}
Client.hasMany(Product);



// l'exportation de module pour l'utiliser dans toute l'application 
module.exports = {
    initDb , Client , Product , User , Article
}

