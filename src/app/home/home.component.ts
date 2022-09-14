import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myData:any;
  myData$:any;
  constructor(private dataService:MyDataService) { }

  ngOnInit(): void {
    // this.dataService.getData().subscribe((data)=>{
    //   this.myData=data
    // })
    this.myData$=this.dataService.getData()
    }

}
