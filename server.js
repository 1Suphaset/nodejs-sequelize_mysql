//program server
const express = require("express");
const app = express();
const PORT =process.env.PORT || 8080;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const db = require("./app/model")
db.sequelize.sync()
    .then(() => {
        console.log("Synced DB!!!")
    })
    .catch(() => {
        console.log("Failed to sync DB!!!")
    })

    app.get("/", (req, res)=>{ //route1 defult route "/" คือ http://localhost:8080
    res.json({message: "Welcome to ITD102 appication defult route"})
});

require("./app/routes/tutorial.routes.js")(app); //route2 แปลว่าเส้นทางlink 

app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`);
});             //call back funcion 
