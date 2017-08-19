import { Component, OnInit } from '@angular/core';
import { LoadersCssModule } from 'angular2-loaders-css';
import { TrashItem } from '../../model/TrashItem';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css'
  ]
})
export class DragndropComponent implements OnInit {

  garbage: TrashItem[]; 
  imgGarbage: string;
  imgRecy: string;
  imgLogo: string;
  trashItem: TrashItem;
  keys: string[];

  constructor() {
    this.garbage = [];
    this.keys = Object.keys(localStorage);
    //console.log(this.keys.length);
    if(this.keys.length == 0){
      this.garbage =[
       {
        id: 'egg carton',
        item:'egg carton',
        recyclable: false,
        message: 'styrofoam is non-recyclable and is bad for the environment because it is not biodegradable, use as little as possible of this material'
      },
      {
        id: 'cereal box',
        item:'cereal box',
        recyclable: true,
        message: 'cereal boxes are made out of carboard which is recycleable'
      },
      {
        id: 'plastic milk jug',
        item:'plastic milk jug',
        recyclable: true,
        message: 'plastic is recycleable'
      },
      {
        id: 'green beans',
        item:'green beans',
        recyclable: false,
        message: 'perishable food items can be safely discarded in the trash'
      },
      {
        id: 'battery',
        item:'battery',
        recyclable: false,
        message: 'batteries contain corrosive chemicals that can harm the enviornment please check the map above for recycling locations for batteries'
      },
      {
        id: 'cell phone',
        item:'cell phone',
        recyclable: false,
        message: 'because cell phones contain batteries, they need to be recycled at a special location, please search the map above'
      },
      {
        id:'writing paper',
        item:'writing paper',
        recyclable: true,
        message: 'paper is recyclable'
      },
      {
        id:'soup can',
        item:'soup can',
        recyclable: true,
        message: 'aluminum cans are recycleable'
      },
      {
        id: 'plastic grocery bags',
        item:'plastic grocery bags',
        recyclable: true,
        message: 'plastic bags can be recycled at all major grocery chains like Walmart, see the map above for locations - try to use cloth bags the next time you go to the store'
      },
      {
        id: 'cardboard',
        item:'cardboard',
        recyclable: true,
        message: 'cardboard is recyclable'
      },
      {
        id: 'candy wrapper',
        item:'candy wrapper',
        recyclable: false,
        message: 'candy wrappers are not recyclable because the paper contains a waxy coating'
      },
      {
        id:'soda can',
        item:'soda can',
        recyclable: true,
        message: 'aluminum and plastic soda cans are recycleable'
      },
      {
        id: 'banana',
        item:'banana',
        recyclable: false,
        message: 'perishable food items can be safely discarded in the trash'
      },
      {
        id: 'old medicine',
        item: 'old medicine',
        recyclable: false,
        message: 'pills and medicine can make its way into the enviornment and harm plants and animals if not discarded properly, check the map above for location'

      }
      ];
    }else{
      for(var i=0; i<this.keys.length; i++){
      this.trashItem = JSON.parse(localStorage.getItem(this.keys[i]));
      this.garbage.push(this.trashItem);
     }
    }
    this.imgGarbage = '/assets/photos/cute-trash-bin-clipart-9.png'
    this.imgRecy = '/assets/photos/recycle-bin7.png';
     this.imgLogo = '/assets/photos/recy.png'
  }

  ngOnInit() {
    this.garbage.map(g => localStorage.setItem(g.id.toString(), JSON.stringify(g)))
  
  }

}
