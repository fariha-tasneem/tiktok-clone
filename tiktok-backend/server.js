import express from 'express';
import mongoose from 'mongoose';
import Data from './data.js';
import Videos from './dbModel.js';

//app config
const app = express();
const port = process.env.PORT||9000;
//
//middlewares
app.use(express.json());
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()
})

//DB config
const connection_url='mongodb+srv://admin1:skyd5ApLipRC5ay5@cluster0.ubqcm.mongodb.net/tiktok?retryWrites=true&w=majority';

mongoose.connect(connection_url,{
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
});

//api endpoints
app.get("/", (req,res) => res.status(200).send('Hello World'));

app.get('/v1/posts', (req, res) => res.status(200).send(Data));

app.get('/v2/posts', (req,res) => {
    Videos.find({}, (err, data) => {
        if(err){
            //500 = 'server error'
            res.status(500).send(err);
        }
        else {
            //201 = 'created'
            res.status(200).send(data);
        }
    })
})

app.post('/v2/posts', (req,res) => {
    const dbVideos = req.body

    Videos.create(dbVideos, (err, data) => {
        if (err){
            //500 = 'server error'
            res.status(500).send(err);
        }
        else{
            //201 = 'created'
            res.status(201).send(data);
        }
    });
})

//listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));