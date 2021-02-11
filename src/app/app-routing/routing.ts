import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {HeaderComponent} from '../header/header.component';
import {AddUserComponent} from '../users/add-user/add-user.component';
import {DetailUserComponent} from '../users/list-user/detail-user/detail-user.component';
import {EditUserComponent} from '../users/edit-user/edit-user.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {AddProfilComponent} from '../profils/add-profil/add-profil.component';
import {DasbordComponent} from '../dasbord/dasbord.component';
import {ListUserComponent} from '../users/list-user/list-user.component';
import {ListProfilComponent} from '../profils/list-profil/list-profil.component';
import {DetailProfilsComponent} from '../profils/list-profil/detail-profils/detail-profils.component';
import {EditProfilComponent} from '../profils/edit-profil/edit-profil.component';
import {ListPromoComponent} from '../promos/list-promo/list-promo.component';
import {ListRefComponent} from '../referentiel/list-ref/list-ref.component';
import {EditRefComponent} from '../referentiel/edit-ref/edit-ref.component';
import {DetailRefComponent} from '../referentiel/list-ref/detail-ref/detail-ref.component';
import {ListGrpCComponent} from '../grp-comptence/list-grp-c/list-grp-c.component';
import {EditGrpCComponent} from '../grp-comptence/edit-grp-c/edit-grp-c.component';
import {DetailGrpCComponent} from '../grp-comptence/list-grp-c/detail-grp-c/detail-grp-c.component';
import {ListCompetenceComponent} from '../comptence/list-competence/list-competence.component';
import {EditCompetenceComponent} from '../comptence/edit-competence/edit-competence.component';
import {DetailCompetenceComponent} from '../comptence/list-competence/detail-competence/detail-competence.component';
import {ListGrptagsComponent} from '../group-tags/list-grptags/list-grptags.component';
import {EditGrptagsComponent} from '../group-tags/edit-grptags/edit-grptags.component';
import {DetailGrptagsComponent} from '../group-tags/list-grptags/detail-grptags/detail-grptags.component';
import {EditPromoComponent} from '../promos/edit-promo/edit-promo.component';
import {DetailPromoComponent} from '../promos/list-promo/detail-promo/detail-promo.component';
import {EditProfilSortieComponent} from '../profils-sortie/edit-profil-sortie/edit-profil-sortie.component';
import {DetailPSComponent} from '../profils-sortie/list-profilSortie/detail-p-s/detail-p-s.component';
import {ListProfilSortieComponent} from '../profils-sortie/list-profil-sortie/list-profil-sortie.component';
import {AddRefComponent} from '../referentiel/add-ref/add-ref.component';
import {AddCompetenceComponent} from '../comptence/add-competence/add-competence.component';
import {AddGrpCComponent} from '../grp-comptence/add-grp-c/add-grp-c.component';
import {AddPromoComponent} from '../promos/add-promo/add-promo.component';
import {AddGrptagsComponent} from '../group-tags/add-grptags/add-grptags.component';
import {AddProfilSortieComponent} from '../profils-sortie/add-profil-sortie/add-profil-sortie.component';
import {ListApprenantComponent} from '../aprenants/list-apprenant/list-apprenant.component';
import {UserDeleteComponent} from '../users/user-delete/user-delete.component';

const appRoute: Routes = [
  { path: '', component: LoginComponent},
  { path: 'admin', component: DasbordComponent},
  { path: 'login', component: LoginComponent},
  { path: 'nav', component: HeaderComponent},

     { path: 'users', component: ListUserComponent},
     { path: 'users-delete', component: UserDeleteComponent},
     { path: 'users/add', component: AddUserComponent},
     { path: 'users/:id', component: DetailUserComponent},
     { path: 'users/edit/:id', component: EditUserComponent},
  { path: 'apprenants', component: ListApprenantComponent},
  { path: 'users/add', component: AddUserComponent},
  { path: 'users/:id', component: DetailUserComponent},
  { path: 'users/edit/:id', component: EditUserComponent},

  { path: 'promos', component: AddPromoComponent},

     { path: 'profiles', component: ListProfilComponent , children: [
         { path: 'edit/:id', component: EditProfilComponent},
         { path: 'add', component: AddProfilComponent},
         { path: 'detail/:id', component: DetailProfilsComponent},
       ]},
  { path: 'profilSortie', component: ListProfilSortieComponent , children: [
      { path: 'edit/:id', component: EditProfilSortieComponent},
      { path: 'add', component: AddProfilSortieComponent},
    ]},
     { path: 'groupecompetence', component: ListGrpCComponent},
     { path: 'groupecompetence/edit', component: EditGrpCComponent},
     { path: 'groupecompetence/add', component: AddGrpCComponent},
  { path: 'groupecompetence/detail', component: DetailGrpCComponent},

  { path: 'groupecompetence', component: ListRefComponent},
     { path: 'groupecompetence/edit', component: EditRefComponent},
     { path: 'groupecompetence/detail', component: DetailRefComponent},

     { path: 'competence', component: ListCompetenceComponent},
     { path: 'competence/add', component: AddCompetenceComponent},
     { path: 'competence/detail', component: DetailCompetenceComponent},

      { path: 'grouptag', component: AddGrptagsComponent},
     { path: 'grouptag/edit', component: EditGrptagsComponent},
     { path: 'grouptag/detail', component: DetailGrptagsComponent},

    { path: 'promos', component: ListPromoComponent},
    { path: 'promos/edit', component: EditPromoComponent},
    { path: 'promos/detail', component: DetailPromoComponent},

    { path: 'profilsortie', component: ListProfilSortieComponent},
    { path: 'profilsortie/edit', component: EditProfilSortieComponent},
    { path: 'profilsortie/detail', component: DetailPSComponent},

   { path: 'referentiele', component: ListRefComponent},
    { path: 'referentiele/edit/:id', component: EditRefComponent},
    { path: 'referentiele/add', component: AddRefComponent},

  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class Routing { }
