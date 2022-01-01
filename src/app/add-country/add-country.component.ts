import { Component, OnInit } from '@angular/core';
import { Country } from '../model/country.model';
import { CountryService } from '../services/country.service';
import { ContinentService } from '../services/continent.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
newCountry = new Country();
continentList:any = [];
  constructor(private countryService: CountryService,private continentService: ContinentService,private router :Router) { };
  ngOnInit(): void {
    this.onSelect()
  }
 addCountry(){
  this.countryService.ajouterCountries(this.newCountry)
  .subscribe(count => {
  console.log(count);
  });
  this.router.navigate(['countries']).then(()=>
  window.location.reload());
 }
 onSelect(){
  this.continentService.listeContinents().subscribe(response =>{
    console.log(response)
    this.continentList = response;

  });
}

}
