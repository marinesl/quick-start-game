/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { Routing } from './router';
    import { TapPageComponent } from './tap-page.component';
//


/* 
Definition 
*/
    @NgModule({
        declarations: [ TapPageComponent ],
        imports: [ 
            CommonModule, 
            Routing,
        ]
    })
//


/* 
Export 
*/
    export class Module {};
//