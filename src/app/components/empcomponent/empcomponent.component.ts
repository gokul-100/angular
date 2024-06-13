import { Component } from '@angular/core';

@Component({
  selector: 'app-empcomponent',
  templateUrl: './empcomponent.component.html',
  styleUrl: './empcomponent.component.css'
})
export class EmpcomponentComponent {
   emp:any=[
    {id:101,name:"gokul",salary:9500,post:"Maneger",address:"chennai"},
    {id:101,name:"kannan",salary:9500,post:"Maneger",address:"chennai"},
    {id:101,name:"kamalesh",salary:9500,post:"Maneger",address:"chennai"},
    {id:101,name:"ajit",salary:9500,post:"Maneger",address:"chennai"}
   ]
}
