import { Component, Input } from '@angular/core';
import { faceSnapHome } from '../../model/face-snap';

@Component({
  selector: 'app-snap-home',
  templateUrl: './snap-home.component.html',
  styleUrls: ['./snap-home.component.css'] 
})
export class SnapHomeComponent {
  @Input() faceSnap!: faceSnapHome;
  
  // snap = 0;
  buttonText: string = "oh snap!";
  
  ngOnInit(){
    this.buttonText = "oh snap!";
  }
  name:String=""
email:string=""
message:string=""
isSubmitted:boolean=false
messages:Array<any>=[];
  onSubmit():void{
    this.isSubmitted=true
    this.messages.push({
      'name':this.name,
      'email':this.email,
      'message':this.message
    })}

  // onAddSnap() {
  //   this.faceSnap.snap++;
  // }
// link="https://th.bing.com/th/id/R.3fa46a46013f961efb985ea692d73f2e?rik=J18czUfy5cCp9A&pid=ImgRaw&r=0"
  onSnap() {
    if (this.buttonText === 'oh snap!'){ 
      this.faceSnap.snaps++;
      this.buttonText = "oops, unSnap!";
    } else {
      this.faceSnap.snaps--;
      this.buttonText = "oh snap!";
    }
  }
  deleteMessage(index: number) {
    this.messages.splice(index, 1)
  }
}