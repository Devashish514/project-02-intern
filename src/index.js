// const express = require('express');
// var bodyParser = require('body-parser');

// const route = require('./routes/route.js');

// const app = express();


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const mongoose = require('mongoose')

// mongoose.connect("mongodb+srv://DevashishTH:sqRxbRZXYI3D38GS@thoriumdg.epj9k.mongodb.net/test", {useNewUrlParser: true})
//     .then(() => console.log('mongodb running on 27017'))
//     .catch(err => console.log(err))

// app.use('/functionup', route);

// app.listen(process.env.PORT || 3000, function() {
// 	console.log('Express app running on port ' + (process.env.PORT || 3000))
// });


const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://DevashishTH:sqRxbRZXYI3D38GS@thoriumdg.epj9k.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) );

app.use('/', route);



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
