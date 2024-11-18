import { Component } from '@angular/core';
import { faceSnapHome  } from '../../model/face-snap';
import { FaceSnapsService } from '../service/facesnaps.service'; 
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'

})
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.css'
})
export class FaceSnapListComponent  {
 
  faceSnaps!: faceSnapHome [] ;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {   
    this.faceSnaps = this.faceSnapsService.faceSnaps;
  }
}