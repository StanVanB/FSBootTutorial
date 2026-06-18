import { Component, Input } from '@angular/core';
import { Houseinfo } from '../interfaces/houseinfo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  @Input() housingLocation!: Houseinfo;

}
