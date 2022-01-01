import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes , CanActivate} from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { UpdateCountryComponent } from './update-country/update-country.component';
import { ContinentsComponent } from './continents/continents.component';
import { AddContinentComponent } from './add-continent/add-continent.component';
import { UpdateContinentComponent } from './update-continent/update-continent.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CountryGuard } from './country.guard';
import { ContinentGuard } from './continent.guard';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:"countries",component:CountriesComponent},
  {path:"add-country",component:AddCountryComponent, canActivate:[CountryGuard]},
  {path: "updateCountry/:id", component: UpdateCountryComponent,canActivate:[CountryGuard]},
  {path:  'login', component: LoginComponent},
  {path:  'app-forbidden', component: ForbiddenComponent},
  {path:"",redirectTo:"countries",pathMatch:"full"},
  {path:"continents",component:ContinentsComponent},
  {path:"add-continent",component:AddContinentComponent, canActivate:[ContinentGuard]},
  {path: "updateContinent/:id", component: UpdateContinentComponent,canActivate:[ContinentGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
