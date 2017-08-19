import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

 script: string;
 map: string;
 
  constructor() { 
     this.script = '/assets/script/googlemap.js';
     this.map = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD01LagOeOm9acA_yU9_RyP2VY-IvobwHw&libraries=places';
  }

  ngOnInit() {
   
  }

}
