import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  constructor(private userService : UserService, private cookieService : CookieService) { }

  cookieValue : string;

  model = new User(null, "", "");

  register() {
    this.userService.register(this.model).subscribe(
    (val: any) => {
    this.cookieService.set('email', this.model.email);
    this.cookieService.set('password', this.model.password);
    console.log(val);
      }
    ); 
  }

}
