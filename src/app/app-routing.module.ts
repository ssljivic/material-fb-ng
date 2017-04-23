import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProfileComponent} from './modules/profile/profile.component';
import {AuthComponent} from './modules/auth/auth.component';

const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth'
  }, {
    path: 'profile',
    component: ProfileComponent
  }, {
    path: 'auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
