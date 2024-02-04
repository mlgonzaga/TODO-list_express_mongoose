const mongoose = require('mongoose');
mongoose.Promise = global.Promise


//Conectando no banco de dados
mongoose.connect('mongodb://127.0.0.1:27017/todo-list')
.then(() => console.log('Conectando ao MongoDB'))
.catch((err) => console.log(err));