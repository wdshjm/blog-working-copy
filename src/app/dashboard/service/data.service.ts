import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class DataService {

  public dataUrl: string = "https://api.myjson.com/bins/13cbx3";

  constructor(private httpClient: HttpClient) { }

  public getList(): Observable<any> {
    return this.httpClient.get(this.dataUrl);
  }

}