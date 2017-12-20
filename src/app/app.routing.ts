import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from "./todo/todo.component";

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';
const myAppRoutes: Routes = [
    { path: '', component: TodoComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
]

export const Routing = RouterModule.forRoot(myAppRoutes);