import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  constructor(
    private http: HttpClient,
  ) { }

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
}

  getFaceSnapById(faceSnapId:number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  snapFaceSnapById(faceSnapId:number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap>{
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === "snap" ? 1 : -1),
      })),
      switchMap(
        updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap)
      )
    );
  }

  addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): void{
    // const faceSnap: FaceSnap = {
    //   ...formValue,
    //   createdDate: new Date(),
    //   snaps: 0,
    //   id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
    // };
    // this.faceSnaps.push(faceSnap);
  }

}
