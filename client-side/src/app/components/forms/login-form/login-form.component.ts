import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private userService: UserService) { }

  model = new User(0, "", "");

  register() {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let options = { headers: headers };
    UserService.register()
  }

}
