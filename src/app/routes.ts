import {Routes} from '@angular/router';
import { ViewListComponent } from './view-list/view-list.component';
import { ViewEditComponent } from './view-edit/view-edit.component';


export const ROUTES: Routes = [
    { path:'edit', component: ViewEditComponent},
    { path:'articles', component: ViewListComponent},
    { path:'', redirectTo:'/articles', pathMatch: 'full'},
]