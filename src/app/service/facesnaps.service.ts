import { Injectable } from '@angular/core';
import { faceSnapHome } from '../../model/face-snap';
 @Injectable({
 providedIn: 'root'
 })
 export class FaceSnapsService {
 faceSnaps: faceSnapHome[] = [
        {
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          imageurl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdate: new Date(),
          snaps: 0
        },
        {
          title: 'Three Rock Mountain',
          description: 'Endroit magnifique',
          imageurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          createdate: new Date(),
          snaps: 0
        },
        {
          title: 'Un bon repas',
          description: 'Yummm c’est bon !',
          imageurl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          createdate: new Date(),
          snaps: 0
        }
      ];
    


 

}