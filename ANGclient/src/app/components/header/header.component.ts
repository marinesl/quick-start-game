/* 
Imports & definition 
*/
  import { Component, OnInit } from '@angular/core';
  import { Router } from "@angular/router";
  import { resolve } from 'q';

  // Inner
  import { ApiResponseModel } from "../../models/api.reponse.model";
  import { AuthService } from "../../services/auth/auth-service.service";


  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    providers: [ AuthService ],
    styles: []
  })
//


/* 
Export
*/
  export class HeaderComponent implements OnInit {

    public isConnected: Boolean = false; // If user is connected
    public first_name: String = ''; // User's first name

    constructor(
      private AuthService: AuthService,
      private router: Router
    ) { }

    // Check if user connected
    public getIsConnected = () => {
      this.AuthService.getUserId()
        .then( (apiResponse: ApiResponseModel) => { 
          this.isConnected = true;
          this.first_name = apiResponse.data.first_name
        })
        .catch( (apiResponse: ApiResponseModel) => { resolve(true) })
    }

    // Function Logout user
    public logout = () => {
      this.AuthService.logout()
      .then( (apiResponse: ApiResponseModel) => { 
        // Go to page Home
        this.router.navigate(['/'])
      })
      .catch( (apiResponse: ApiResponseModel) => { resolve(true) })
    }

    ngOnInit() {
      this.getIsConnected()
    }

  }
//
