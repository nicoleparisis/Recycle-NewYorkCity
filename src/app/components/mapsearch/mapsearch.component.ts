import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../Apiservice.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Car } from '../Car';
import 'rxjs/add/operator/map';
import { SortMPGPipe } from '../../sort-mpg.pipe';

@Component({
  selector: 'app-mapsearch',
  templateUrl: './mapsearch.component.html',
  styleUrls: ['./mapsearch.component.css'],
  providers: [ApiserviceService]
})
export class MapsearchComponent implements OnInit {

  dataItems: any;
  text: string;
  xmlData: Observable<any>;
  dataItems2: any;
  text2: string;
  xmlData2: Observable<any>;
  carSelectedValue: string;
  modelSelectedValue: string;
  carId: string;
  carInfoArray: string;
  carObject: Car;
  carArray: Car[];
  carArray2: Car[];
  carArray3: any;
  feScore: string;
  model: string;
  fuelType: string;
  infoArray: any[];
  phevBlended: string;
  highway08: string;
  city08: string;

  constructor(private mapQuest: ApiserviceService, http: Http) { 
   this.carArray = new Array<Car>();
   this.carArray2 = new Array<Car>();
   this.carArray3 = new Array<any>();
   this.infoArray = new Array<any>();
  }
  getCarMake(): any{
        this.mapQuest
        .getCarMake()
        .subscribe(result =>
        {
          console.log(result);
          this.dataItems = result.menuItem;
          this.text = result.text;
        });
   }
   getCarId(model: Car): any{
       
        this.mapQuest
        .getCarId(this.carSelectedValue, model)
        .subscribe(result =>
        {
          this.carArray2 = result.menuItem;
         
          for(var i=0; i < this.carArray2.length; i++){
            
            this.getCarInfo(this.carArray2[i]);
          
          }
        });
   }
      getCarInfo(car: Car): any{
        this.infoArray = [];
        this.mapQuest
        .getCarInfo(car)
        .subscribe(result =>
        {
          this.dataItems2 = result;
          this.feScore = result.feScore;
          this.phevBlended = result.phevBlended;
          this.model = result.model;
          this.city08 = result.city08;
          this.highway08 = result.highway08;
          this.fuelType = result.fuelType;
          this.infoArray.push(this.dataItems2);
          this.infoArray.sort((a: any, b: any) =>{
            console.log(a);
            console.log(b);
            if (a.feScore > b.feScore) return -1;
            else if (a.feScore < b.feScore) return 1;
            else return 0;
          });
          //console.log(result);
        });
   }
    getCarModel(make: string): any{
       this.carSelectedValue = make;
       return this.mapQuest
        .getCarModel(make)
        .subscribe(result =>
        {
          
          this.carArray = result.menuItem;
         
          for(var i=0; i < this.carArray.length; i++){
            
            this.getCarId(this.carArray[i]);
           
          }
          
         
        });    
   }

  ngOnInit() {
   this.getCarMake();
  }

}
