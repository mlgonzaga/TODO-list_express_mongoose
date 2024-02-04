const express = require('express')
const path = require('path') //utilizamos para dizer em qual diretorio estão nossas views

const checklistRouter = require('./src/routes/checklist')
const taskRouter = require('./src/routes/task')
const rootRouter = require('./src/routes/index')
//Middleware que ajuda o html a fazer requisições diferentes de post e get em um form
const methodOverride = require('method-override')

require('./config/database');



const app = express();
//app.use(express.json());//                    middleware para entender a requisição e coloca no body
app.use(express.urlencoded({extended: true})) // middleware para entender a requisição onde o parametro vem via url
app.use(methodOverride('_method', { methods: ['POST', 'GET']}))

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'src/views')) // setando o path
app.set('view engine', 'ejs') // dizendo o express qual será a view engine que iremos usar que no caso é o EJS

app.use('/',rootRouter);
app.use('/checklists',checklistRouter) //Chamando rotas em um arquivo separado
app.use('/checklists', taskRouter.checklistDependent)
app.use('/tasks', taskRouter.simple)

app.listen(3000, () =>{
    console.log('Servidor foi iniciado')
})