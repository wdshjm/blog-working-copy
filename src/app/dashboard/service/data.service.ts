import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class DataService {

  public dataUrl: string = "https://api.myjson.com/bins/8vlnz";

  constructor(private httpClient: HttpClient) { }

  public getList(): Observable<any> {
    return this.httpClient.get(this.dataUrl);
  }

  public postCard(card: any) {
    this.httpClient.get(this.dataUrl).subscribe(resp => {
      let result = resp;

      //result = `${result},${card}`;
      
      result += card;

      console.log(result);
      this.putCards(result);     
    });
  }

  private putCards(result) {
    console.log("drin");
     this.httpClient.put(this.dataUrl, result).subscribe(resp => {

     });
  }

}