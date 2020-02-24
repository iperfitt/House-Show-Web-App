import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private cookieValue: string;  

  private title = "DIY Event App"

  constructor(private cookieService: CookieService) {}

  public ngOnInit(): void {
    this.cookieService.set('cookie-name', 'our cookie value');
    this.cookieValue = this.cookieService.get('cookie-name');
    console.log(this.cookieService.get('cookie-name'));
  }

}
