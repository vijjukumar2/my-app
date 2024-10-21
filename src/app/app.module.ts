import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipesComponent } from './pipes/pipes.component';
import { TasksComponent } from './tasks/tasks.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';
import { EmployeeDetailesComponent } from './employee-detailes/employee-detailes.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import{ HttpClientModule} from '@angular/common/http';
import { BankComponent } from './bank/bank.component';
import { Flipcart1Component } from './flipcart1/flipcart1.component';
import { CartComponent } from './cart/cart.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreatebankComponent } from './createbank/createbank.component';
import { IdcardComponent } from './idcard/idcard.component';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DuplicateUserComponent } from './duplicate-user/duplicate-user.component';
import { VehicleDetailesComponent } from './vehicle-detailes/vehicle-detailes.component';
import { BankDetailesComponent } from './bank-detailes/bank-detailes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    PagenotfoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    DiceComponent,
    DirectiveComponent,
    PipesComponent,
    TasksComponent,
    FlipcartComponent,
    HigherOrderComponent,
    EmployeeDetailesComponent,
    VehicleComponent,
    BankComponent,
    Flipcart1Component,
    CartComponent,
    AmazonComponent,
    MailComponent,
    CreateVehicleComponent,
    CreatebankComponent,
    IdcardComponent,
    StudentdataComponent,
    CreateUserComponent,
    DuplicateUserComponent,
    VehicleDetailesComponent,
    BankDetailesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
