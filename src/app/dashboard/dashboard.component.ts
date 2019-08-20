import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { MatDialog } from "@angular/material";
import { PostDialogComponent } from './post-dialog/post-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public cards: any[];

  constructor(private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataService.getList().subscribe(resp => {
      this.cards = resp;
    });
  }

  newPost(){
    const dialogRef = this.dialog.open(PostDialogComponent, {
      data: { name: "TEST" }
    });



    //this.dataService.postCard( {"id": 123, "title": "TestTitle1", "content": "TestContent4"} );
  }

}