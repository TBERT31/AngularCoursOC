import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

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
    this.mySnap = {
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'Paris',
    };

    this.myOtherSnap = {
      title:'Three Rock Mountain',
      description:'Un endroit magnifique pour les randonnées.',
      createdDate:new Date(),
      snaps:0,
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/280px-Three_Rock_Mountain_Southern_Tor.jpg',
      location: 'La Montagne'
    };

    this.myLastSnap = {
      title:'Un bon repas',
      description:"Mmmh que c'est bon !",
      createdDate:new Date(),
      snaps:0,
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/2/2b/Le_go%C3%BBter_sur_l%27herbe.jpg',
    };
  }
}
