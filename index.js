const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
var mysql = require('mysql');
// defining the Express app
const app = express();

var con = mysql.createConnection({
    host: "localhost", // ip address of server running mysql
    user: "root", // user name to your mysql database
    password: "password123", // corresponding password
    database: "studentsDB" // use this database to querying context
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

con.query("SELECT * FROM studentsDB.students", function(err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    console.log(result[0]);
    // Object.keys(result).forEach(function(key) {
    //     var row = result[key];
    //     console.log(row.name)
    // });
    // Object.keys(fields).forEach(function(key) {
    //     var field = fields[key];
    //     console.log(field)
    // });
});



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://dbUser:dbUserPassword@cluster0.l2xaqds.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("Cluster0").collection("sample_analytics");
//     // perform actions on the collection object
//     console.log(collection);
//     client.close();
// });


// defining an array to work as the database (temporary solution)
const ads = [
    { title: 'Hello, world (again)!' }
];

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send(ads);
});

// starting the server
app.listen(3001, () => {
    console.log('listening on port 3001');
});