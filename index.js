import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const apiUrl= "https://api.jikan.moe/v4";

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req,res)=>{
    try {
            const result = await axios.get(`${apiUrl}/anime`);
    const animeList = (result.data.data);
    res.render("index", {content: animeList});
    } catch (error) {
        res.render("index", {error: error.response?.data || "API Error"});
    }

});

app.post("/get", async(req,res)=>{
try {
    let searchInput = req.body.searchinput;
    const result = await axios.get(`${apiUrl}/anime?q=${searchInput}`);
    res.render("index", {content: result.data.data})
} catch (error) {
    res.render("index", {error: error.response?.data || "API Error"});
}
});

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})