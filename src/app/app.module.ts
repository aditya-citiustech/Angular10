import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, userRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompCreationComponent } from './comp-creation/comp-creation.component';
import { InterpolComponent } from './interpol/interpol.component';
import { PropBindingComponent } from './Bindings/prop-binding/prop-binding.component';
import { ClassBindingComponent } from './Bindings/class-binding/class-binding.component';
import { StyleBindingComponent } from './Bindings/style-binding/style-binding.component';
import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';
import { TwoWayBindingComponent } from './Bindings/two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UsersComponent } from './users/users.component'
import { MultiCaste } from './rxjs/multi-cast.component';
import { Comp1Component } from './rxjs/Behaviour-subject/comp1/comp1.component';
import { Comp2Component } from './rxjs/Behaviour-subject/comp2/comp2.component';
import { NamesComponent } from './Dependency-Injec/names/names.component';
import { CoursesComponent } from './Dependency-Injec/courses/courses.component';
import { EmployeeService } from './Dependency-Injec/employee.service';
import { PredefinedComponent } from './Pipes/predefined/predefined.component';
import { ReversePipe } from './Pipes/predefined/reverse.pipe';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { ViewchildComponent } from './view/viewchild/viewchild.component';
import { SingleSlotComponent } from './content-projection/single-slot/single-slot.component';
import { ParentComponent1 } from './content-projection/parent/parent.component';
import { MiniComponent } from './view/mini/mini.component';
import { ViewchildrenComponent } from './view/viewchildren/viewchildren.component';
import { OnchangesComponent } from './life-cycle/onchanges/onchanges.component';
import { MycompComponent } from './life-cycle/mycomp/mycomp.component';
import { DocheckComponent } from './life-cycle/docheck/docheck.component';
import { Content1Component } from './life-cycle/contentinit/content1/content1.component';
import { Content2Component } from './life-cycle/contentinit/content2/content2.component';
import { ApiClassInterceptor } from './Interceptors/api-class.interceptor';
import { ChangeReqInterceptor } from './Interceptors/change-req.interceptor';
import { TabledataComponent } from './tabledata/tabledata.component';

@NgModule({
  declarations: [
    AppComponent,
    CompCreationComponent,
    InterpolComponent,
    PropBindingComponent,
    ClassBindingComponent,
    // StyleBindingComponent,
    ParentComponent,
    ChildComponent,
    TwoWayBindingComponent,
    userRoutes,
    NotFoundComponent,
    UsersComponent,
    MultiCaste,
    Comp1Component,
    Comp2Component,
    NamesComponent,
    CoursesComponent,
    PredefinedComponent,
    ReversePipe,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    ViewchildComponent,
    SingleSlotComponent,
    ParentComponent1,
    MiniComponent,
    ViewchildrenComponent,
    OnchangesComponent,
    MycompComponent,
    DocheckComponent,
    Content1Component,
    Content2Component,
    TabledataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeService,
  {provide:HTTP_INTERCEPTORS, useClass:ApiClassInterceptor,multi:true},
  {provide:HTTP_INTERCEPTORS, useClass:ChangeReqInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
