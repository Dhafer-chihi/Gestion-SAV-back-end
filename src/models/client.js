
module.exports = (sequelize , DataTypes)=>{
    return sequelize.define('Client' , {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nom : {
            type : DataTypes.STRING,
            allowNull : false
        },
        prenom : {
            type : DataTypes.STRING,
            allowNull : false
        },
        mobile : {
            type : DataTypes.STRING,
            allowNull : false
        },
        email: {
            type : DataTypes.STRING,
            allowNull : false
        },
        
    },
    {
        timestamps : true
    }
    )
}