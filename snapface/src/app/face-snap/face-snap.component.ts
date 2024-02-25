import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
    @Input() faceSnap!: FaceSnap;

    // title!: string;
    // description!: string;
    // createdDate!: Date;
    // snaps!: number;
    // imageUrl!: string;
    buttonText!:string;

    constructor(

    ){}

    ngOnInit(): void {
      // this.title = this.faceSnap.title;
      // this.description = this.faceSnap.description;
      // this.createdDate = this.faceSnap.createdDate;
      // this.snaps = this.faceSnap.snaps;
      // this.imageUrl = this.faceSnap.imageUrl;
      this.buttonText = "Oh Snap!";
    }

    onSnap(){
      if(this.buttonText === "Oh Snap!"){
        this.faceSnap.snaps++;
        this.buttonText = "Oops, unSnap!";
      }else{
        this.faceSnap.snaps--;
        this.buttonText = "Oh Snap!";
      }
    }
}
