import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HousingService } from '../services/housing-service';
import { Houseinfo } from '../interfaces/houseinfo';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  houseInfo!: Houseinfo;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.houseInfo = this.housingService.getHousingLocationById(id) as Houseinfo;
      console.log(this.houseInfo);
    }
  }
}
