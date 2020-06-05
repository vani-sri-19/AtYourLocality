import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials: TokenPayload = {
    //email: '',
    name: '',
    password: '',
    place: '',
    category: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
    alert("reg function");
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/location');
    }, (err) => {
      console.error(err);
    });
  }

  ngOnInit(): void {
  }

}
