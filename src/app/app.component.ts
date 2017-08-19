import { Component } from '@angular/core';
import { DragndropComponent } from './components/dragndrop/dragndrop.component';
import { MapsearchComponent } from './components/mapsearch/mapsearch.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  imgLogo: string;
  constructor(){
    this.imgLogo = '/assets/photos/recy.png'
  }
  
}
