const userModel = (sequalize,DataTypes)=>{
    sequalize.define("User",{
        userName : {
            type : DataTypes.STRING
        },
        Password : {
            type : DataTypes.STRING
        },
        email : {
            type : DataTypes.STRING
        }

    })
}
module.exports = userModel