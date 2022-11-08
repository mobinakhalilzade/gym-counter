import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BottomNavigationComponent } from './shared/components/bottom-navigation/bottom-navigation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    component: BottomNavigationComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'routines',
        loadChildren: () => import('./modules/routines/routines.module').then(m => m.RoutinesModule)
      },

    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
