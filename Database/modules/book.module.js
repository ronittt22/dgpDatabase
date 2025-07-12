const { toDefaultValue } = require("sequelize/lib/utils")

const bookModel = (sequalize,DataTypes)=>{
    sequalize.define("book",{
        PathshalabookName : {
            type: DataTypes.STRING,
            allowNull : false
        },
        bookPrice: {
            type: DataTypes.INTEGER,
            allowNull : false
        },
        
        bookAuthor: {
            type: DataTypes.STRING,
            allowNull : false
        },
        bookGenra: {
            type: DataTypes.STRING,
            toDefaultValue: "Fiction"
        }
    })
    return bookModel
}


module.exports = bookModel