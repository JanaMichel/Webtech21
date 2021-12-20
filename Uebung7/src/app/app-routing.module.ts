import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cities",
    component: CitiesComponent
  }
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

