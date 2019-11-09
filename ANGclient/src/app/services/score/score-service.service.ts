/* 
Imports 
*/
	import { Injectable } from '@angular/core';
	import { HttpClient, HttpHeaders } from '@angular/common/http';
	import { environment } from "../../../environments/environment";
//


/* 
Definition 
*/
	@Injectable()
	export class ScoreService {

		// Inject module(s) in the service
		constructor( private HttpClient: HttpClient ){};
		
		// Function to save the score
		public save(score): Promise<any>{
			// Set header
			let myHeader = new HttpHeaders();
			myHeader.append('Content-Type', 'application/json');

			// POST '/score/save'
			return this.HttpClient.post(`${environment.apiUrl}/score/save`, { score }, { headers: myHeader })
			.toPromise().then(this.getData).catch(this.handleError);
		};

		// Function get all scores
		public getScores(): Promise<any>{
			// POST '/score'
			return this.HttpClient.get(`${environment.apiUrl}/score`)
			.toPromise().then(this.getData).catch(this.handleError);
		};

    

		// Get the API response
		private getData(res: any){
			return res || {};
		};

		// Get the API error
		private handleError(err: any){
			return Promise.reject(err.error);
		};
	};
//