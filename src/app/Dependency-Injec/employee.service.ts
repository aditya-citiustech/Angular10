import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployeeData() {

    return [
    {"id":1,"name":"Aditya","course":"Angular"},
    {"id":2,"name":"Sri","course":"ReactJs"},
    {"id":3,"name":"Rama","course":"ViewJS"}
  ]
  }
}
