import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
 {path:"login",component:LoginComponent},
 {path:"admin",component:AdminComponent},
 {path:"",component:LoginComponent},
 {path:"adduser",component:AdduserComponent},
 {path:"add",component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
