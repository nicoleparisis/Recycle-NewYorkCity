import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Car } from './Car';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiserviceService {

   carObject: Car;
   carObjectArr: Car[];
   infoObject: Car;
   infoObjectArr: any[];
   retVal2: Observable<any>;

   constructor(private http: Http) { this.carObjectArr = new Array<Car>(); this.infoObjectArr = new Array<any>();}

  getCarMake(): Observable<any>{
    let url: string = 'http://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year=2017';
    let params = new URLSearchParams();

    return this.http.get(url).map((res: Response) => res.json());
  }
  getCarModel(car: string): Observable<any>{
    let url: string = 'http://www.fueleconomy.gov/ws/rest/vehicle/menu/model?year=2017&make=' + car;
    let params = new URLSearchParams();

    return this.http.get(url).map((res: Response) => res.json());
  }
  getCarId(make: string, model: Car): Observable<any>{
      
         let url: string = 'http://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=2017&make=' 
         + make + '&model=' + model.text;
         return this.http.get(url).map((res: Response) => res.json());    
       
  }
   getCarInfo(io: Car): Observable<any>{
        let url2: string = 'http://www.fueleconomy.gov/ws/rest/vehicle/' + io.value;
         return this.http.get(url2).map((res: Response) => res.json());
  
  }

}
