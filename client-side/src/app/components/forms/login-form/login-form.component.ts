import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private userService: UserService) { }

  model = new User(0, "", "");

  submitCredentials() {
    this.userService.register(this.model).subscribe(
    (val: any) => console.log(val)); 
  }

}
