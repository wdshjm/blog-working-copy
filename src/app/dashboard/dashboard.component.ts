import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public cards: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getList().subscribe(resp => {
      this.cards = resp;
    });
  }

  newPost(){
    this.dataService.postCard( {"id": 123, "title": "TestTitle1", "content": "TestContent4"} );
    //this.
  }

}