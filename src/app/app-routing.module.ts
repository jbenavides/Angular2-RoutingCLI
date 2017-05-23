import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from 'app/home/welcome.component';
import { PageNotFoundComponent } from 'app/page-not-found.component';
import { AuthGuard } from 'app/user/auth.guard';
import { SelectiveStrategy } from 'app/selective-strategy.service';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'products',
    loadChildren: 'app/products/product.module#ProductModule',
    canActivate: [AuthGuard],
    data: { preload: true }
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, preloadingStrategy: SelectiveStrategy})],
  exports: [RouterModule],
  providers: [SelectiveStrategy]
})
export class AppRoutingModule { }
