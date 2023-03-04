import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit {
tableContent:any = []
  constructor(private tableData:UserserviceService) { }

  ngOnInit(): void {

    this.tableData.getUsers().subscribe((data)=>{
      this.tableContent = data;
      console.log('data',this.tableContent)
    })
  }

}
