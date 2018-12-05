import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  // https://www.youtube.com/watch?v=kWdjpgVqgSA
  id = 'kWdjpgVqgSA';
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
