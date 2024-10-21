import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
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
import { BankComponent } from './bank/bank.component';
import { Flipcart1Component } from './flipcart1/flipcart1.component';
import { CartComponent } from './cart/cart.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreatebankComponent } from './createbank/createbank.component';
import { IdcardComponent } from './idcard/idcard.component';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { DuplicateUserComponent } from './duplicate-user/duplicate-user.component';
import { VehicleDetailesComponent } from './vehicle-detailes/vehicle-detailes.component';
import { BankDetailesComponent } from './bank-detailes/bank-detailes.component';

const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'dashboard',canActivate:[AuthenticationGuard], component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'databinding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'Rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
    {path:'Dice',component:DiceComponent},
    {path:'directive',component:DirectiveComponent},
    {path:'pipes',component:PipesComponent},
    {path:'tasks',component:TasksComponent},
    {path:'flipcart',component:FlipcartComponent},
    {path:'higher-order',component:HigherOrderComponent},
    {path:'employee-detailes',component:EmployeeDetailesComponent},
    {path:'vehicle', component:VehicleComponent},
    {path:'bank',component:BankComponent},
    {path:'flipcart1',component:Flipcart1Component},
    {path:'cart',component:CartComponent},
    {path:'amazon',component:AmazonComponent},
    {path:'mail',component:MailComponent},
    {path:'createvehicle',component:CreateVehicleComponent},
    {path:'createbank',component:CreatebankComponent},
    {path:'idcard',component:IdcardComponent},
    {path:'studentdata',component:StudentdataComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'duplicate-user',component:DuplicateUserComponent},
    {path:'vehicle-detailes/:id',component:VehicleDetailesComponent},
    {path:'bank-detailes/:id',component:BankDetailesComponent}

  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
