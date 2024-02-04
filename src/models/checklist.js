const mongoose = require('mongoose')

// mapeando uma colection
const checklistSchema = mongoose.Schema( {
    name: {type: String, required: true},
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,// tem que passar um array de tasks
        ref: 'Task'
    }]
} )

module.exports = mongoose.model('Checklist', checklistSchema)