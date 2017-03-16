import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';
import { Component, OnInit } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-zwitter',
  templateUrl: './zwitter.component.html',
  styleUrls: ['./zwitter.component.scss']
})
export class ZwitterComponent implements OnInit {

  zweets: FirebaseListObservable<any[]>;
  user: FirebaseAuthState;

  constructor(private af: AngularFire,
    private router: Router,
    private angulartics2: Angulartics2) {
    af.auth.subscribe(auth => {
      if (auth) {
        console.log('User', auth);
        this.user = auth;
      } else {
        router.navigate(['login']);
      }
    });
    this.zweets = af.database.list('/');
  }

  logout() {
    this.af.auth.logout();
  }

  add(field) {
    this.zweets.push({
      text: field.value,
      user: this.user.auth.email,
      likes: 0,
      createdAt: (new Date()).toString()
    });
    field.value = '';
    this.angulartics2.eventTrack.next({ action: 'add' });
  }

  delete($key: string) {
    this.zweets.remove($key);
  }

  like($key: string, previousCount: number) {
    this.zweets.update($key, { likes: previousCount + 1 });
  }

  ngOnInit() {}

}
