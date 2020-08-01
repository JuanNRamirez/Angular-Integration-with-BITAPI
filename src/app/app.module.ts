import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { StudentsServiceService } from './services/students-service.service'
import { Students } from './models/students';
import { RegisterstudentComponent } from './components/registerstudent/registerstudent.component';
import { NavbarComponent } from './components/landing/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ViewstudentComponent } from './components/viewstudent/viewstudent.component';
import { EditstudentComponent } from './components/editstudent/editstudent.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add', component: RegisterstudentComponent},
  { path: 'view', component: ViewstudentComponent},
  { path: 'view/:id', component: EditstudentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterstudentComponent,
    NavbarComponent,
    HomeComponent,
    ViewstudentComponent,
    EditstudentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
