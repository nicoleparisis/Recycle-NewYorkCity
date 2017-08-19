import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiserviceService {

  constructor(private http: Http) { }

  getDirections(recycleItem: string, address: string): Observable<any>{
    let url: string = 'http://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year=2012';
    let params = new URLSearchParams();

    return this.http.get(url).map((res: Response) => res.json());
  }

}
