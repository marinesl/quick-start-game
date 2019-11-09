/* 
 Imports & definition 
*/
	// Imports
	import { Component, OnInit } from '@angular/core';

	// Inner
	import { ScoreService } from "../../services/score/score-service.service";
	import { ApiResponseModel } from "../../models/api.reponse.model";

	// Navigation
	import { Router } from '@angular/router';

	// Definition
	@Component({
		selector: 'app-user-page',
		templateUrl: './user-page.component.html',
		styleUrls: ['./user-page.component.css'],
		providers: [ ScoreService ]
	})
//


/* 
 Export
*/
  	export class UserPageComponent implements OnInit {

		public tap: boolean = false; // For image on or off
		public temps: number = 0; // Current duration of game
		private startTimer: boolean = false; // Is timer stated ?
		private firstClick: boolean = false; // Is first click ?
		private interval = null // Set interval
		private score: number = 0 // User score

		/* 
		Config.
		*/
			// Module injection
			constructor(
				private ScoreService: ScoreService,
				private router: Router // Navigation
			) {};
		//


    /*
     Methods
    */	
		// Every time the button is clicked
		public tapOn = () => {
			this.tap = !this.tap // Reverse tap
			this.firstClick = true // First click ok
			this.score++ // Increment score

			// If first click but timer not started
			if (this.firstClick && !this.startTimer) {
				// Start timer
				this.startTimer = true
				// Function timer
				this.timer()				
			}
		}

		// Timer starting
		public timer = () => {
			this.interval = setInterval(
				() => {
					// Increment game duration to 10 for the progress bar (on 100)
					this.temps += 10

					// If gets to 100
					if (this.temps == 100) {
						// Stop interval
						clearInterval(this.interval)
						this.interval = null
						// Save score
						this.saveScore(this.score)
					}
				},
				1000
			)
		}

		// Save score
		public saveScore = (score) => {
			// Send score data
			this.ScoreService.save(score)
			.then( (apiResponse: ApiResponseModel) => {
				// Redirect to page /tap
				this.router.navigate([`/tap`])
			})
			.catch( (apiResponse: ApiResponseModel) => {
			  console.log(apiResponse)
			})
		};
    //


    /* 
     Hooks
    */
      	ngOnInit() { };
    //
  }
//