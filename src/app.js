import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import loadRoutes from './loaders/routes.js';

const app = express();
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
loadRoutes(app);

export default app;