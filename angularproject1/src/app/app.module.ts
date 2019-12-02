import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { GenderPipe } from './gender.pipe';
import { ReversePipe } from './reverse.pipe';
import { FilterPipe } from './filter.pipe';
import { BoosterPipe } from './booster.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    GenderPipe,
    ReversePipe,
    FilterPipe,
    BoosterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
