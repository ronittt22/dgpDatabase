// const { sequelize } = require("../Connection")

const ProductModel = (sequalize,DataTypes)=>{
    sequalize.define("Product",{
        ProductName : {
            type : DataTypes.STRING(100),
        },
        ProductPrice : {
            type : DataTypes.FLOAT
        },
        ProductImage : {
            type : DataTypes.STRING(100)
        }

    })
}
module.exports = ProductModel