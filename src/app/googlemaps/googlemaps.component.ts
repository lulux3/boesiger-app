import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})
export class GooglemapsComponent implements OnInit {

  lat: number = 47.411726;
  lng: number = 8.153534;
  zoom: number = 16;
  mapDraggable: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
