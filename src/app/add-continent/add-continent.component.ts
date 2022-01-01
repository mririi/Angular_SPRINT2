import { Component, OnInit } from '@angular/core';
import { Continent } from '../model/continent.model';
import { ContinentService } from '../services/continent.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-add-continent',
  templateUrl: './add-continent.component.html',
  styleUrls: ['./add-continent.component.css']
})
export class AddContinentComponent implements OnInit {
newContinent = new Continent();
  constructor(private continentService: ContinentService,private router :Router) { }

  ngOnInit(): void {
  }
 addContinent(){
  this.continentService.ajouterContinents(this.newContinent)
  .subscribe(cont => {
  console.log(cont);
  });
  this.router.navigate(['continents']).then(()=>
  window.location.reload());
 }
}
