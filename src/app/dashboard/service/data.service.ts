import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class DataService {

  public dataUrl: string = "https://api.myjson.com/bins/9ye9r";
  private result: any[] = [];

  constructor(private httpClient: HttpClient) { }

  public getList(): Observable<any> {
    return this.httpClient.get(this.dataUrl);
  }

  public postCard(card: any) {
    this.httpClient.get<Object[]>(this.dataUrl).subscribe(resp => {
      this.result = resp;
      this.result.push(card);
      this.putCards(this.result);     
    });
  }

  private putCards(result) {
     this.httpClient.put(this.dataUrl, result).subscribe(resp => {
     });
  }

}