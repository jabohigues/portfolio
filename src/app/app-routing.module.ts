import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './home/components/principal/principal.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PrincipalComponent },
  /*{ path: 'inicio', component: NoticiarioComponent, canActivate: [LoginGuard] },
  {
    path: 'clasificacion',
    component: PrincipalClasificacionComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'alineacion',
    component: PrincipalAlineacionComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'mercado',
    component: PrincipalMercadoComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'jornada',
    component: PrincipalJornadaComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'liga',
    component: PrincipalLigaComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'liga/crearLiga',
    component: PrincipalCrearLigaComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'liga/unirseLiga',
    component: PrincipalUnirseLigaComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'perfil',
    component: PrincipalPerfilComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'perfil/configuracion',
    component: PrincipalConfPerfilComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'perfil/configuracionLiga',
    component: PrincipalConfLigaComponent,
    canActivate: [LoginGuard, UserLiderGuard],
  },*/
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page https://angular.io/guide/router
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
