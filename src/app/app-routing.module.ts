import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './home/components/principal/principal.component';
// import { PrincipalAboutComponent } from './about/components/principal-about/principal-about.component';
// import { PrincipalContactComponent } from './contact/components/principal-contact/principal-contact.component';
// import { PrincipalHabilitiesComponent } from './habilities/components/principal-habilities/principal-habilities.component';
// import { PrincipalComponent } from './home/components/principal/principal.component';
// import { PrincipalProjectsComponent } from './projects/components/principal-projects/principal-projects.component';
// import { PrincipalTecnologiesComponent } from './tecnologies/components/principal-tecnologies/principal-tecnologies.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PrincipalComponent },

  //No podemos hacer rutas porque nos lleva a una página distinta, no podemos seguir en la misma
  // { path: 'about', component: PrincipalAboutComponent },
  // { path: 'projects', component: PrincipalProjectsComponent },
  // { path: 'habilities', component: PrincipalHabilitiesComponent },
  // { path: 'tecnologies', component: PrincipalTecnologiesComponent },
  // { path: 'contact', component: PrincipalContactComponent },

  { path: '**', redirectTo: 'home' }, // Wildcard route for a 404 page https://angular.io/guide/router
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
