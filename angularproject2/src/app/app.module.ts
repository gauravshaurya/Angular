import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { DepartmentListComponent } from './department-list/department-list.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { DepartmentDetailComponent } from './department-detail/department-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    // EmployeeListComponent,
    // DepartmentListComponent,
    // PageNotFoundComponent,
    // DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
