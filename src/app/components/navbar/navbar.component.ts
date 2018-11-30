import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show: boolean = false;

  constructor() { }

  ngOnInit() {

  }
  // funcion para ocultar toggler
  toggleCollapse() {
    this.show = !this.show;
  }
  toggleOff(){
    this.show = false;
  }
}
