// const axios = require('axios');

// const getCharById = (res, id) =>{
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((result)=> result.data)
//     .then((data)=>{
//         let character = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin,
//             image: data.image,
//             status: data.status
//         }
//         res.writeHead(200, {'Content-Type': 'application/json'}).end(
//             (JSON.stringify(character))
//         )
//     })
//     .catch((error)=>res.writeHead(500, {'Content-Type': 'text/plain'}).end(error.message))

// }


// module.exports = getCharById

const URL = "https://rickandmortyapi.com/api/character"
const axios = require('axios')

const getCharById = async (req, res) => {

    try {
        const {id} = req.params
        
        const {data} = await axios(`${URL}/${id}`)

            if(!data.name) throw new Error(`ID: ${id} Not found`)

                const character = {
                    id: data.id,
                    name: data.name,
                    species: data.species,
                    origin: data.origin,
                    image:  data.image,
                    gender: data.gender,
                    status: data.status
                }
               
                return res.status(200).json(character)
            
            //return res.status(404).send('Not Found')
       

    } catch (error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.message)
    }

   

   
    
}

module.exports = {getCharById}