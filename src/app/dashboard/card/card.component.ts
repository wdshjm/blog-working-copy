import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  private _card: any;

  constructor() { }

  @Input()
  public set card(card: any) {
   this._card = card;
  }

  public get card() {
    return this._card;
  }

  ngOnInit() {
  }

}