const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize("postgresql://postgres.zvycokltleomqugxfvgs:Ronit@dhikari@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres");

sequelize.authenticate()
.then(()=>{
    console.log("connected to database")
})
.catch((err)=>{
    console.log("Error" +err)
})

const info = {
    user: "Rojesh",
    age: 21
}
const db = {}
db.Sequelize = Sequelize //key name = class
db.sequelize = sequelize //key name = object


// const db = {
//     Sequelize : Sequelize,
//     sequelize : sequelize
// }
db.books = require("./modules/book.module")(sequelize, DataTypes)
db.products = require("./modules/product.module")(sequelize, DataTypes)
db.user = require("./modules/user.module")(sequelize,DataTypes)



sequelize.sync({ alter: false}).then (()=>{ //force: true any changes update garcha supabase ma but  table ko existing data lai hataidincha 
    //alter:true le chai column ko name matra change garcha

console.log("Migrated")
})
module.exports = db
