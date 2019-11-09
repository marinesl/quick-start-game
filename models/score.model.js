/*
Import
*/
    // Mongoose
    const mongoose = require('mongoose')
    const { Schema } = mongoose;
    const ObjectId = Schema.Types.ObjectId;
//

/*
Mongoose schema deefinition
Declare each property and type needed for the schema
*/
    const scoreSchema = new Schema({
        score: Number,
        user_id: {
            type: ObjectId,
            ref: 'identity' // Reference to IdentitySchema
        },
        date: {
            type: Date,
            default: new Date()
        }
    })
//


/*
Export
Create a const that use the Mongoose schema to declare an objet model
*/
    const ScoreModel = mongoose.model('score', scoreSchema);
    module.exports = ScoreModel;
//