import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  
  samir={
    firstname:"alex",
    lastname:"maiza",
    age:20,
    
    
}
arrays=["aymen","samir","ahmed"]
array = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"]
verif=true
title="alex";
description="mon meilleur ami depuis tout petit";
createDate=new Date();
snaps=6
ngOnnit(){
  this.title="alex";
  this.description="mon meilleur ami depuis tout petit"
  this.createDate=new Date();
  this.snaps=6
}
link="https://th.bing.com/th/id/R.3fa46a46013f961efb985ea692d73f2e?rik=J18czUfy5cCp9A&pid=ImgRaw&r=0"
pstyle="color:red;"
linkk="https://www.aymen.com"
number=1

inc(){
this.number++
}
dec(){
  this.number--

}
}
