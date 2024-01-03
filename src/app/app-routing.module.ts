import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  provideRouter,
  withInMemoryScrolling
} from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/security/login',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'security',
    loadChildren: () =>
      import('./security/security.module').then(m => m.SecurityModule)
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'branches',
    loadChildren: () =>
      import('./branches/branches.module').then(m => m.BranchesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled' // Parte para que vuelva al mismo lugar cuando se da Location.back()
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
