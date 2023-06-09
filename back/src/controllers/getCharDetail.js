const axios = require('axios');

const getCharDeatail = (res, id) =>{

    
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((result)=> result.data)
        .then((data)=>{
            let character = {
                
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status
            }
            res.writeHead(200, {'Content-Type': 'application/json'}).end(
                (JSON.stringify(character))
            )
        })
        .catch((error)=>res.writeHead(500, {'Content-Type': 'text/plain'}).end(error.message))
    
    
    

}

module.exports = getCharDeatail