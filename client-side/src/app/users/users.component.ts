import { Component, OnInit } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

@Component({
  selector: 'Users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class Users implements OnInit {
  
  users = [
    'ian', 
    'allison',
     'maddie'
    ]

  constructor() { }

  ngOnInit() {
  }

}
