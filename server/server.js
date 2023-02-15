import express from "express"; // import express
const app = express(); // instance express

import * as dotenv from 'dotenv'; 
import cors from 'cors';
dotenv.config();


const port = process.env.PORT || 5000;

// connect to DB
require('./config/mongoose.config');

// require('./routes/product.route');
import personRoutes from './routes/product.route'; // ES6 import of route
personRoutes(app); // route module instance

// middleware
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server listening the port http://localhost/" + ${port}`);
});
