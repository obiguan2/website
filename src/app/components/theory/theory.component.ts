import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.css']
})
export class TheoryComponent implements OnInit {
  // https://www.youtube.com/watch?v=JrIP_pP_mR0
  id = 'JrIP_pP_mR0';
  private player;
  private ytEvent;

  constructor() { }

  ngOnInit() {
  }
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  // metodos
  playVideo() {
    this.player.playVideo();
  }
  pauseVideo() {
    this.player.pauseVideo();
  }

}
