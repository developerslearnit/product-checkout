import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cardinfo', loadChildren: './cardinfo/cardinfo.module#CardinfoPageModule' },
  { path: 'otp', loadChildren: './otp/otp.module#OtpPageModule' },
  { path: 'success', loadChildren: './success/success.module#SuccessPageModule' },
  { path: 'failure', loadChildren: './failure/failure.module#FailurePageModule' },
  { path: 'pin', loadChildren: './pin/pin.module#PinPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
