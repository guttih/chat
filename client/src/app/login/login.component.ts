import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  loginFailed: boolean = false;
  
  constructor(private chatService : ChatService, private router : Router) {

  }

  ngOnInit() {
  }

   onLogin() {
     console.log('LoginComponent::onLogin');
    this.chatService.login(this.userName).subscribe(succeeded => {
    this.loginFailed = !succeeded;
    if (succeeded === true) {
      this.router.navigate(["/rooms"]);
      // TODO: redirect to Roomlist Component!
    }
    });
  }

}
