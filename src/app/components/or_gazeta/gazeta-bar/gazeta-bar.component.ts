import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  inputs: ['type'],
  outputs: ['onTypeSelected'],
  selector: 'app-gazeta-bar',
  templateUrl: './gazeta-bar.component.html',
  styleUrls: ['./gazeta-bar.component.css']
})
export class GazetaBarComponent implements OnInit {

  type = "gazeta"
  onTypeSelected: EventEmitter<string>;
  constructor() { 
    this.onTypeSelected = new EventEmitter();
  }

  ngOnInit() {
    this.type = "gazeta"
    this.onTypeSelected.emit(this.type);
  }
  site(){
    this.type = "site"
    this.onTypeSelected.emit(this.type);
  }
  lviv(){
    this.type = "lviv"
    this.onTypeSelected.emit(this.type);
  }
  gazeta(){
    this.type = "gazeta"
    this.onTypeSelected.emit(this.type);
  }
  regions(){
    this.type = "regions"
    this.onTypeSelected.emit(this.type);
  }

  media(){
    this.type = "media"
    this.onTypeSelected.emit(this.type);
  }

}