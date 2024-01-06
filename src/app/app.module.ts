import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpUsComponent } from './help-us/help-us.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorFormComponent,
    HomeComponent,
    PatientComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {path:'doc',component:DoctorFormComponent},
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'pat',component:PatientComponent},
    {path:'reg',component:RegisterComponent},
    {path:'log',component:LoginComponent},
    {path:'contact',component:ContactUsComponent},
    {path:'help',component:HelpUsComponent}
  ])
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
