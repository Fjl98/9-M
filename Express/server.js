const express = require('express');
const userRouter = require("./routes/user");
const app = express();
app.listen(3000);
app.set("view engine", "views");


app.get("/",(req,res) => {
    
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/user',userRouter);
app.use('/user/new',userRouter);



