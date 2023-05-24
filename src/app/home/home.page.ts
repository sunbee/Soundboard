import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  audioPlayer: HTMLAudioElement = new Audio();
  nowPlaying: string = '';

  constructor() {}

  playAudio(audioUrl: string) {
    if (this.nowPlaying === audioUrl) { // This is what is playing already
      this.audioPlayer.pause();
      this.audioPlayer.currentTime = 0;
      this.nowPlaying = '';
    } else { // Stop and switch tracks
      if (this.nowPlaying) { // Stop if playing
        this.audioPlayer.pause();
        this.audioPlayer.currentTime = 0;     
      } 
      // Switch tracks
      this.audioPlayer.src = audioUrl;
      this.audioPlayer.load();
      this.audioPlayer.play();  
      this.nowPlaying = audioUrl;
    }
  }
}



