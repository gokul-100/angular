import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
    myName:string ="Gokul kannan";
    imgpath:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s";
    imgname:string="imageName";
    mydata:any;

    greeting(){
      window.alert("good morining friends")
    }
}
