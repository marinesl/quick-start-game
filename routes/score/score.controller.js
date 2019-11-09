/*
Import
*/
    const IdentityModel = require('../../models/identity.model')
    const ScoreModel = require('../../models/score.model')
//

/*
Methods
*/
    /**
     * Save user's score
     * @param body => score: Number
     * @param user => user: Object
    */
    const saveScore = (user, body) => {
        return new Promise( (resolve, reject) => {
            // Search user by id
            IdentityModel.findOne( { _id: user._id }, (error, user) => {
                if(error) return reject(error) // Mongo Error
                else if(!user) return reject('User not found')
                else{
                    body.user_id = user._id;

                    // Register new score
                    ScoreModel.create(body)
                    .then( mongoResponse => {
                        resolve({ _id: mongoResponse._id })
                    })
                    .catch( hashError => reject(hashError) );
                };
            });
            
        });
    };


    /**
     * Get all scores
    */
    const getScores = () => {
        return new Promise( (resolve, reject) => {
            // Search all scores
            ScoreModel.find( (error, scores) => {
                if(error) return reject(error) // Mongo Error
                else {
                    let result = []

                    scores.forEach(function(score) {

                        let promise = new Promise( (resolve, reject) => {
                            // Search user of the score
                            IdentityModel.findById(score.user_id, (error, user) => {
                                if (user) {
                                    score.user_id = user
                                    return resolve(score)
                                }
                            })
                        })

                        result.push(promise)
                    }) 
                    
                    Promise.all(result)
                        .then(data => {
                            return resolve(data)
                        });
                };
            }).sort({score: 'desc'});;
            
        });
    };
   
//


/*
Export
*/
    module.exports = {
        saveScore,
        getScores
    }
//