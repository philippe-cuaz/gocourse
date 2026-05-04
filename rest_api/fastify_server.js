// const express = require('express');
// const cluster = require('cluster');
const fastify = require('fastify')({logger:true});
// const os = require('os');

// const numCPUs = os.cpus().length;
// const port = 8080;

// if(cluster.isMaster){
//     for (let i=0;i<numCPUs;i++){
//         cluster.fork()
//     }

//     cluster.on('exit',(worker,code,signal)=>{
//         console.log("Worker ${worker.process.pid} died. Forking a new worker...");
//         cluster.fork();
//     })
// } else {
// const app = express();


// Sample
const personData = {
    "1": { Name: "John Doe", Age: 30},
    "2": { Name: "Jane Doe", Age: 28},
    "3": { Name: "Jack Doe", Age: 25}
};

// Handler function for the endpoint
//app.get('/person', (req,res)=>{
    // Define the route 
    fastify.get('/person',async(request,reply)=>{

  //  })
    const id = request.query.id;

    if(!id){
        //return res.status(400).send('ID is missing');
        reply.code(400).send('ID is missing');
        return;
    }

    const person = personData[id];

    if (!person){
   
        //return res.status(400).send('Person not found');
        reply.code(400).send('Person not found');
        return;
    }

    //res.json(person);
    reply.send(person);
});

// Start the server
// app.listen(port,()=>{
//     console.log(`Server started on port ${port}`);
// });
// }
const start = async()=>{
    try{
        await fastify.listen({port:8080});
        fastify.log.info(`Server started on port 8080`);
    } catch(err){
        fastify.log.error(err);
        process.exit(1);
    }
};
start();



