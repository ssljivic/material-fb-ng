import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

declare const FB: any;

@Component({
  selector: 'my-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  login() {
    this.fbLogin()
    .subscribe(user => {
      console.log('User details:', user);
      this.router.navigate(['/profile']);
    });
  }

  fbLogin(): Observable<Object> {
    return Observable.create((observer) => {
      FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
          FB.api('/me?fields=name,email,picture', (res) => {
            if (!res || res.error) {
              observer.error(res.error);
            } else {
              const userDetails = {
                name: res.name,
                email: res.email,
                uid: res.id,
                image: res.picture.data.url,
                token: response.authResponse.accessToken
              };
              observer.next(userDetails);
              observer.complete();
            }
          });
        } else {
          FB.login((loginResponse) => {
            if (loginResponse.status === 'connected') {
              FB.api('/me?fields=name,email,picture', (res) => {
                if (!res || res.error) {
                  observer.error(res.error);
                } else {
                  const userDetails = {
                    name: res.name,
                    email: res.email,
                    uid: res.id,
                    image: res.picture.data.url,
                    token: loginResponse.authResponse.accessToken
                  }
                  observer.next(userDetails);
                  observer.complete();
                }
              });
            }
          }, {scope: 'email'});
        }
      });
    });
  }
}
