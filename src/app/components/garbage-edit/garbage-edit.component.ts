import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrashItem } from '../../model/TrashItem';

@Component({
  selector: 'app-garbage-edit',
  templateUrl: './garbage-edit.component.html',
  styleUrls: ['./garbage-edit.component.css']
})
export class GarbageEditComponent implements OnInit {

  trash: TrashItem;
	title:  string;
  trashCopy: TrashItem;
  garbage: TrashItem[];
  keys: string[];
  trashItem: TrashItem;
  trshid: any;
  show: boolean;

  constructor(private route: ActivatedRoute) { 
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

  saveTrash(trashNeedingUpdate: TrashItem): void {
    let trashList:TrashItem[] = this.garbage;
    let trashItem: TrashItem = trashList.find(
    		f => {return (f.id == trashNeedingUpdate.id)});
    let i: number = trashList.indexOf(trashItem);
		trashList[i] = trashNeedingUpdate;
    localStorage.setItem(trashNeedingUpdate.id, JSON.stringify(trashNeedingUpdate))
  }
  cancelEditTrash(id: string): void {
      this.trash = this.trashCopy; 
      this.saveTrash(this.trash);
  }
  addItem(): TrashItem {
  	let friends:TrashItem[] = this.garbage;
  	
  	let friend: TrashItem = new TrashItem();
  	friend.id = "item id - must change me";
  	friends.push(friend);
  	return friend;
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.show= false;
    if (id) {
        this.title = 'Edit Trash Item';
        this.trash = this.getTrash(id);
        this.trashCopy = JSON.parse(JSON.stringify(this.trash));
    } else {
      this.show = true;
    	this.title = "Add Trash Item";
			this.trash = this.addItem();
		}
		
  }

}
