import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
  data:any = []
  constructor(private _EmployeeService:EmployeeService) { }

  ngOnInit(): void {
    this.data = this._EmployeeService.getEmployeeData();
  }

}
