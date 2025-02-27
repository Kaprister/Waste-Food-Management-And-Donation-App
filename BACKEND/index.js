const express = require('express');
const db = require('./config/database');
const dotenv = require('dotenv');
const cors = require('cors');
const contactRoutes = require("./routes/contact.routes")
const donateRoutes = require("./routes/donate.routes")
dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: "*",
		credentials: true,
        optionSuccessStatus:200,
	})
);

app.use("/api/v1/auth", donateRoutes);
app.use("/api/v1/auth", contactRoutes);
app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "your server is up and running",
    })
})



app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
    db.connect((err) => {
        if(err){
            console.log(`Database connection Failed!`);
            console.log(err);
        }else{
            console.log(`Database connection Successfully!`);
        }
    })
})