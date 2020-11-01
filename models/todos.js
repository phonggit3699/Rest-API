const mongodb = require ('mongoose');

const todoSchema =  mongodb.Schema({

    todo: {
        type: String,
        require: true
    },

    completed:{
        type: Boolean,
        default: false
    },

    Date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongodb.model('todos', todoSchema);