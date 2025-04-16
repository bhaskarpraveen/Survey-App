const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const PORT = 3000;


app.use(express.json());
app.use(cors());
app.get('/',(request,response)=>{
    return response.status(200).json({'Message':"Successful GET request"});
});

app.get('/data',(request,response)=>{
    pool.query(`SELECT * FROM form`,(error,results)=>{
        if(error){
            return response.status(501).json({'error':err.message});
        }
        return response.status(200).json(results.rows);
    });
});

app.post('/data',(request,response)=>{
    const {full_name, email, age, gender, marital_status, nationality, address} = request.body;
    pool.query(`INSERT INTO form(full_name, email, age, gender, marital_status, nationality, address) values ($1,$2,$3,$4,$5,$6,$7)`,[full_name, email, age, gender, marital_status, nationality, address],(error,results)=>{
        if(error){
            return response.status(501).json({'error':error.message});
        }
        return response.status(200).json({'message':'Inserted record successfully!!'});
    });
    

});
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});