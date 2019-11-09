/* 
Imports & definition 
*/
    // Imports
    import { Component, OnInit } from '@angular/core';

    // Inner
    import { AuthService } from "../../services/auth/auth-service.service";
    import { ScoreService } from "../../services/score/score-service.service";
		import { ApiResponseModel } from "../../models/api.reponse.model";


    // Definition
    @Component({
			selector: 'app-tap-page',
			templateUrl: './tap-page.component.html',
			providers: [ AuthService , ScoreService ]
    })
//


/* 
Export
*/
	export class TapPageComponent implements OnInit {

		public allScores: [] = [] // Array of all the scores

		/* 
		Config.
		*/
			// Module injection
			constructor(
				private ScoreService: ScoreService
			) {};
		//


		/*
		Methods
		*/
			// Get all scores
			public scores = () => {
				// Send user data
				this.ScoreService.getScores()
				.then( (apiResponse: ApiResponseModel) => {
					this.allScores = apiResponse.data
				})
				.catch( (apiResponse: ApiResponseModel) => {
					console.log(apiResponse)
				})
			};
		//


		/* 
		Hooks
		*/
			ngOnInit() { 
				this.scores()
			};
		//
	};
//