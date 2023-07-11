import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('login/component').then((m) => m.RemoteEntryComponent),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
