import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './face-snap/models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap !: FaceSnap;
  myLastSnap !: FaceSnap;

  ngOnInit(){
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit',
      new Date(),
      0,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    );

    this.myOtherSnap = new FaceSnap(
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',
      new Date(),
      0,
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/280px-Three_Rock_Mountain_Southern_Tor.jpg',
    );

    this.myLastSnap = new FaceSnap(
      'Un bon repas',
      "Mmmh que c'est bon !",
      new Date(),
      0,
      'https://upload.wikimedia.org/wikipedia/commons/2/2b/Le_go%C3%BBter_sur_l%27herbe.jpg',
    );
  }
}
