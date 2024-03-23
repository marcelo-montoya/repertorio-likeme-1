const pool = require('../config/connection')

const obtenerPosts = async() => {
    const {rows} = await pool.query('SELECT * FROM posts');
    return rows;
}

const agregarPost = async(titulo, img, descripcion) => {
    const consulta = "INSERT INTO posts values(DEFAULT, $1, $2, $3, 0)";
    const values = [titulo, img, descripcion];
    try {
        const result = await pool.query(consulta, values);
        // console.log('Post agregado');
        return true        
    } catch (error) {
        return false
    }
}

module.exports = {
    obtenerPosts,
    agregarPost
};