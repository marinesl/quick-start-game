/* 
Imports & definition 
https://gist.github.com/DWS-paris/65df1566222cd9819e3050e96af6f0c6
*/
  // Imports
  import { Injectable } from '@angular/core';
  import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

  // Inner
  import { ApiResponseModel } from "./models/api.reponse.model";
  import { AuthService } from "./services/auth/auth-service.service";

  // Definition
  @Injectable({
    providedIn: 'root'
  })
//


/* 
Export
*/
  export class AuthGuard implements CanActivate {
    /* 
    Properties
    */
      constructor( 
        private AuthService: AuthService,
        private Router: Router,
      ){}
    //


    /**
     * AuthGurad Strategy: thee canActivate is used in 'app.router'
     * @param next : informations about the route component => https://bit.ly/2VT2Us1
     * @param state : the state of the router => https://bit.ly/2Uo3zjO
     */
      canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        return new Promise( (resolve, reject) => {
          // Use Auth service to check user indentity from the servere
          this.AuthService.getUserId() /* resolve(true) */
          .then( (apiResponse: ApiResponseModel) => {
            if (state.url == '/')
            	this.Router.navigateByUrl('/me')
            else
            	resolve(true) 
          })
          .catch( (apiResponse: ApiResponseModel) => {
			if (state.url == '/')
				resolve(true)
			else
				this.Router.navigateByUrl('/')
          })
        })
      }
    //
  }
//