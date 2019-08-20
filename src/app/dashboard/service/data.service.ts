import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class DataService {

  public dataUrl: string = "https://api.myjson.com/bins/8vlnz";
  private result: any[];

  constructor(private httpClient: HttpClient) { }

  public getList(): Observable<any> {
    return this.httpClient.get(this.dataUrl);
  }

  public postCard(card: any) {
    this.httpClient.get(this.dataUrl).subscribe(resp => {
      this.result = resp;

      //result = `${result},${card}`;
      
      this.result.push(card);

      console.log(this.result);
      this.putCards(this.result);     
    });
  }

  private putCards(result) {
    console.log("drin");
     this.httpClient.put(this.dataUrl, result).subscribe(resp => {

     });
  }

}