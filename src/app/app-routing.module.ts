import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

const routes: Routes = [
//path: '/dashboard ' contiene lo que hay en PagesRouting
//path: '/auth' contiene lo que hay en AuthRouting

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagesfoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
