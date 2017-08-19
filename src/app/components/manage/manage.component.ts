import { Component, OnInit } from '@angular/core';
import { TrashItem } from '../../model/TrashItem';
import { DragndropComponent } from '../dragndrop/dragndrop.component';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  garbage: TrashItem[];
  keys: string[];
  trashItem: TrashItem;
  trshid: any;

  constructor(drag: DragndropComponent) {
     this.garbage = [];
     this.keys = Object.keys(localStorage);
     for(var i=0; i<this.keys.length; i++){
      this.trashItem = JSON.parse(localStorage.getItem(this.keys[i]));
      this.garbage.push(this.trashItem);
     }
     
   }

    getTrash(id: string): TrashItem {
      let trashList:TrashItem[] = this.garbage;
      let trashItem: TrashItem = trashList.find(
          f => {return (f.id == id)});
      return trashItem;
    }
    deleteTrash(id: string): void{
    let trash = this.getTrash(id);
    if(confirm("Are you sure to delete " + trash.item)) {
      	let trashList:TrashItem[] = this.garbage;
        let trashItem: TrashItem = trashList.find(
    		f => {return (f.id == id)});
		    let i: number = trashList.indexOf(trashItem);
        trashList.splice(i, 1);
        this.garbage = trashList;
        console.log(id);
        localStorage.removeItem(id);
     }else{
       
     }
  }

  ngOnInit() {
  }

}
