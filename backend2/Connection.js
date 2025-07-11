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

module.exports = db
