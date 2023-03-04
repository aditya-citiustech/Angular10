import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'] 
})
export class UsersComponent implements OnInit {
users:any = [];
  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((values)=>{
     this.users = values;
    })
  }

}
