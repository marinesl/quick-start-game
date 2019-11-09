/* 
Imports 
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { TapPageComponent } from './tap-page.component';
//


/* 
Definition 
*/
    const route: Routes = [
        {
            path: '',
            component: TapPageComponent
        }
    ];
//


/* 
Export 
*/
    export const Routing: ModuleWithProviders = RouterModule.forChild(route);
//