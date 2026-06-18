import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { Houseinfo } from '../interfaces/houseinfo';
import { HousingService } from '../services/housing-service';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  housingService: HousingService = inject(HousingService);
  housingLocations: Houseinfo[] = [];
  filteredLocationList: Houseinfo[] = [];


  constructor() {
    this.housingLocations = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocations;
  }

  filterLocations(searchValue: string) {
    if (!searchValue) {
      this.filteredLocationList = this.housingLocations;
      return;
    }

    this.filteredLocationList = this.housingLocations.filter((location) => 
      location?.city.toLowerCase().includes(searchValue.toLowerCase()) ||
      location?.name.toLowerCase().includes(searchValue.toLowerCase()),
    );

  }

}