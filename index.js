const express = require('express');
const cors = require('cors');
const { obtenerPosts, agregarPost } = require('./controllers/post');

const app = express();
app.listen(3000, console.log('SERVER UP AND LISTENING'));

app.use(cors())
app.use(express.json())

app.get("/posts", async(req, res) => {
    const posts = await obtenerPosts()
    res.json(posts)
})

app.post("/posts", async(req, res) => {
    const {titulo, img, descripcion} = req.body;
    const result = await agregarPost(titulo, img, descripcion);
    if (result) {
        res.status(200).send('Post agregado')        
    } else {
        res.status(500).send('Ha ocurrido un error')        
    }

})