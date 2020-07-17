const express = require("express");
const app = express();
const morgan = require("morgan");

//setings(aqui se valida si existe el puerto)
app.set('port',process.env.PORT||3000)
//con esto se modifican los espacion en el obj json
app.set('json spaces',2)



//middleware (Solicitud de peticiones) 
app.use(morgan("dev"));
app.use(express.json());
//Tratar de entender solo datos de formulario que no son pesados
app.use(express.urlencoded({ extended: false }));


//Routes
app.use(require('./Routes/index'))
app.use('/api/movies',require('./Routes/movies'))
app.use('/api/users',require('./Routes/users'))

//Starting Server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });
  