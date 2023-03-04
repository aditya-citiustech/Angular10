import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { StyleBindingComponent } from './Bindings/style-binding/style-binding.component';
import { UsersComponent } from './users/users.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';

const routes: Routes = [
{path:"style-bind",component:StyleBindingComponent},
{path:"users",component:UsersComponent},
{path:"template",component:TemplateDrivenComponent},
{path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const userRoutes = [StyleBindingComponent,UsersComponent,TemplateDrivenComponent]
