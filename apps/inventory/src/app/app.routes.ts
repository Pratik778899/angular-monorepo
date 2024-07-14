import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'button',
    loadComponent: () =>
      import('@angular-monorepo/Button').then((m) => m.ButtonComponent),
  },
  {
    path: 'card',
    loadComponent: () =>
      import('@angular-monorepo/Card').then((m) => m.CardComponent),
  },
];
