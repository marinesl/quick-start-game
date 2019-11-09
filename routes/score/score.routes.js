/*
Imports
*/
    // Node
    const express = require('express');
    const scoreRouter = express.Router();

    // Inner
    const Mandatory = require('../../services/mandatory.service');
    const Vocabulary = require('../../services/vocabulary.service');
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/response.service');
    const { checkFields } = require('../../services/request.service');
    const { saveScore , getScores } = require('./score.controller');
//

/*
Routes definition
*/
    class ScoreRouterClass {

        // Inject Passport to secure routes
        constructor({ passport }) {
            this.passport = passport;
        }
        
        // Set route fonctions
        routes(){

            /**
             * POST Route to save the user's score
             * @param body: Object => score: Number
             * @callback => save the score
            */
            scoreRouter.post( '/save', this.passport.authenticate('jwt', { session: false }), (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatory.saveScore, req.body );

                //=> Error: bad fields provided
                if (!ok) { sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
                else{
                    //=> Request is valid: use controller
                    saveScore(req.user, req.body)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
                };
            });
            
            /**
             * GET Route to get all scores
             * @callback => get all scores
            */
            scoreRouter.get( '/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
                //=> Request is valid: use controller
                getScores()
                .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            });

            
        };

        // Start router
        init(){
            // Get route fonctions
            this.routes();

            // Sendback router
            return scoreRouter;
        };
    };
//

/*
Export
*/
    module.exports = ScoreRouterClass;
//