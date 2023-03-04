import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
 data:any=[];
  constructor(private _EmployeeService:EmployeeService) { }

  ngOnInit(): void {

    this.data=this._EmployeeService.getEmployeeData();
  }

}
