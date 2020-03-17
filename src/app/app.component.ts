import { Component } from '@angular/core';
import { RandomuserService } from './services/randomuser.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagination';

  data : Array<any>
  totalRecords: number
  page:number=1
  constructor(private randomuser: RandomuserService)
  {
    this.data= new Array<any>()
  }
  getUsers()
  {
    this.randomuser.getData().subscribe((data)=>{
      console.log(data)
      this.data=data
      this.totalRecords=data.length
    })

  }
}
