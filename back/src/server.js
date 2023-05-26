// const http = require("http")
// const data = require("./utils/data")
// const {getCharById} = require('./controllers/getCharById')

// http.createServer((req, res)=>{
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     const {url} = req;
//     console.log(url);

//     if(url.includes("rickandmorty/character/")){
//        // console.log("estoy en la ruta");
//       const id =url.split("/").at(-1)
//     //   getCharById(res, Number(id))
//       const character = data.find((char)=> char.id == id)
//         //console.log(character);
//         if(character){
//             res.writeHead(200, {"Content-Type": "application/json"})
//             res.end(JSON.stringify(character))
//         }else{
//             res.writeHead(400, {"Content-Type": "application/json"})
//             return res.end(JSON.stringify({error: "Character not found"}))
//         }
//        //res.end(`Estoy en la ruta con el id ${id}`);
//     }

// }
// ).listen(3001, "localhost")

// //RUTAS
// //rickandmorty/character/id

// const http = require('http');
// const getCharById = require('./controllers/getCharById')
// const getCharDetail = require('./controllers/getCharDetail')

// http.createServer((req, res)=>{
//   res.setHeader("Access-Control-Allow-Origin", "*");

//   const {url} = req

//   if(url.includes("onsearch")){
//     const id =url.split("/").at(-1)
//     getCharById(res, id)
//   }
//   if(url.includes("detail")){
//     const id =url.split("/").at(-1)
//     getCharDetail(res, id)
//   }
  


// }).listen(3001, 'localhost');


const express = require('express');
const PORT = 3001;
const server = express();
const router = require('./routes/index');
const morgan = require('morgan');

server.use(express.json())
server.use(morgan('dev'))

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use('/rickandmorty', router)

server.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
})