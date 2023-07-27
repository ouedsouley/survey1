import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'identite',
    pathMatch: 'full'
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'picture',
    loadChildren: () => import('./pages/picture/picture.module').then( m => m.PicturePageModule)
  },
  {
    path: 'bible',
    loadChildren: () => import('./pages/bible/bible.module').then( m => m.BiblePageModule)
  },
  {
    path: 'identite',
    loadChildren: () => import('./pages/identite/identite.module').then( m => m.IdentitePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
