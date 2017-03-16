import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private af: AngularFire,
    private router: Router) {
    af.auth.subscribe(auth => {
      if(auth && auth.auth) {
        console.log('User', auth.auth.email);
        router.navigate(['']);
      }
    });
  }

  ngOnInit() {
  }

  login(form) {
    this.af.auth.login({
      email: form.value.email,
      password: form.value.password
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
    form.reset();
  }

  signup(form) {
     this.af.auth.createUser({
      email: form.value.email,
      password: form.value.password
    });
    form.reset();
  }

}
