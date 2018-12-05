import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.css']
})
export class TheoryComponent implements OnInit {
  // https://www.youtube.com/watch?v=9DBe28ylqmk
  id = '9DBe28ylqmk';
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
