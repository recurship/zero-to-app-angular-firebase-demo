import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  zweets: FirebaseListObservable<any[]>;
  user: FirebaseAuthState;
  constructor(private af: AngularFire) {
    this.af.auth.subscribe(auth => {
      if (auth && auth.auth) {
        console.log('User', auth, auth.auth.email);
        this.user = auth;
      } else {
        console.log('No user available.');
      }
    });

    this.zweets = this.af.database.list('/');
  }

  add(field) {
    this.zweets.push({
      text: field.value,
      createdAt: (new Date()).toString(),
      user: this.user.auth.email,
      likes: 0
    });

    field.value = '';
  }

  like(uid: string, zweet) {
    if (!zweet.likes) { zweet.likes = 0; }
    this.zweets.update(uid, { likes: zweet.likes + 1 })
  }

  delete(uid: string) {
    this.zweets.remove(uid);
  }

  logout() {
    this.af.auth.logout();
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
