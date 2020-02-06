import { Component, OnInit } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'Users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class Users implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit() {
  }
  
  users = [
    'ian', 
    'allison',
     'maddie'
    ]

    getUsers() {
      console.log(this.userservice.getAllUsers());
    }

}
