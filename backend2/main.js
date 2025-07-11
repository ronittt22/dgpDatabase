const express = require("express")
const app = express()

// app.get("/",(req,res)=>{
//     res.json ({
//         message : "Hello, World!",
//         name : "Rojesh"

//     })
// });

// app.put("/try",(req,res)=>{
//     res.json({
//         "id" : "300400500",
//         "number" : "98981048184"
//     })
// })



// app.post("/about",(req,res)=>{
//     res.json({
//         function: "Welcome to learning platform"
//     })
// });

app.get("/books",function(req,res){
    //logic to fetch books from database
    res.json({
        "message" : "Book fetched successfully"

    })
})

app.post("/books",function(req,res){
    //logic to fetch books from database
    res.json({
        "message" : "Book added successfully"

    })
})

app.delete("/books/:id", function(req,res){
    //logic
    res.json({
        message: "Books deleted successfully"
    })

})

app.patch("/books/:id", function(req,res){
    //logic
    res.json({
        message: "Books updated successfully"
    })

})

postgresql://postgresql://postgres.ouoacabjlmfyelpcsrvn:%G28z.sm+x4R.sh@aws-0-ap-south-1.pooler.supabase.com:6543/postgres


app.listen(3000, function(){
    console.log(" server node has started at port 3000")
});


