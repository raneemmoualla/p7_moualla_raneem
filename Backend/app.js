// imports
const express = require('express');
// lancement de l'application express
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet')
const path = require('path');
const auth = require('./middleware/auth');
const multer = require('./middleware/multer-config');

// import des routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');
const commentRoutes = require('./routes/comment');


app.use(helmet())
app.use(cors())


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// appel des models dans la DB
const db = require("./models");
db.sequelize.sync();

// enregistrement des routeurs
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', authRoutes);
app.use('/api/users', auth, userRoutes);
app.use('/api/messages', auth, messageRoutes);
app.use('/api/comments', auth, commentRoutes);

// export de notre app
module.exports = app; 