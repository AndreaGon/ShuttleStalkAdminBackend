const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require('body-parser');

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

const hostname = '127.0.0.1';
const port = 3000;

const server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port

    console.log(`Server running at http://${hostname}:${port}/`);
})

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shuttle-stalk-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const allowedOrigins = ['http://localhost:4200'];
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }

}));
app.use(bodyParser.json());

app.get("/status", (req, res) => {
    res.send("check Status");
});

//Announcement Messaging
const topic = 'announcements';

app.post("/send-notif", function(req, res){
    console.log(req)
    const message = {
        data: {
          title: req.body.title,
          content: req.body.content,
          route: ""

        },
        notification: {
          title: req.body.title,
          body: req.body.content
        },
        topic: topic
    };
      
    // Send a message to devices subscribed to the provided topic.
    admin.messaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message', message);
        console.log('Content: ', req.body);
    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });
})