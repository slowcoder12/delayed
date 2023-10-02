const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./backend/database/database');
const cors = require('cors');
const app = express();

const slotRoute = require('./backend/routes/slot-route')


app.use(cors());
app.use(express.json());

app.use(express.static('frontend'));



app.post('/addBooking',slotRoute);

app.get('/addBooking',slotRoute);


sequelize.sync().then(result=>{
    app.listen(3000);
   
})
.catch(err=>{
    console.log(err);
});


