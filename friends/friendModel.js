const Mongoose = require('mongoose');

const definition = {
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 120
    },
    createdOn: {
        type: Date,
        required: true,
        default: Date.now
    },
};

const options = {
    timestamps: true,
};

const friendSchema = new.Mongoose.Schema(definition, options);

const bearModel = mongoose.model('Friend', friendSchema, 'friends');

module.exports = friendModel;