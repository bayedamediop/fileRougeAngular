import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {Routing} from './app-routing/routing';
import { AddProfilComponent } from './profils/add-profil/add-profil.component';
import { ListProfilComponent } from './profils/list-profil/list-profil.component';
import { DetailProfilsComponent } from './profils/list-profil/detail-profils/detail-profils.component';
import { EditProfilComponent } from './profils/edit-profil/edit-profil.component';
import { AddProfilSortieComponent } from './profils-sortie/add-profil-sortie/add-profil-sortie.component';
import { ListProfilSortieComponent } from './profils-sortie/list-profil-sortie/list-profil-sortie.component';
import { DetailPSComponent } from './profils-sortie/list-profilSortie/detail-p-s/detail-p-s.component';
import { EditProfilSortieComponent } from './profils-sortie/edit-profil-sortie/edit-profil-sortie.component';
import { AddGrpCComponent } from './grp-comptence/add-grp-c/add-grp-c.component';
import { ListGrpCComponent } from './grp-comptence/list-grp-c/list-grp-c.component';
import { DetailGrpCComponent } from './grp-comptence/list-grp-c/detail-grp-c/detail-grp-c.component';
import { EditGrpCComponent } from './grp-comptence/edit-grp-c/edit-grp-c.component';
import { AddCompetenceComponent } from './comptence/add-competence/add-competence.component';
import { ListCompetenceComponent } from './comptence/list-competence/list-competence.component';
import { DetailCompetenceComponent } from './comptence/list-competence/detail-competence/detail-competence.component';
import { EditCompetenceComponent } from './comptence/edit-competence/edit-competence.component';
import { AddRefComponent } from './referentiel/add-ref/add-ref.component';
import { ListRefComponent } from './referentiel/list-ref/list-ref.component';
import { DetailRefComponent } from './referentiel/list-ref/detail-ref/detail-ref.component';
import { EditRefComponent } from './referentiel/edit-ref/edit-ref.component';
import { ListPromoComponent } from './promos/list-promo/list-promo.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { DetailUserComponent } from './users/list-user/detail-user/detail-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DasbordComponent } from './dasbord/dasbord.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from '@auth0/angular-jwt';
import { AddPromoComponent } from './promos/add-promo/add-promo.component';
import { DetailPromoComponent } from './promos/list-promo/detail-promo/detail-promo.component';
import { EditPromoComponent } from './promos/edit-promo/edit-promo.component';
import { AddGrptagsComponent } from './group-tags/add-grptags/add-grptags.component';
import { ListGrptagsComponent } from './group-tags/list-grptags/list-grptags.component';
import { DetailGrptagsComponent } from './group-tags/list-grptags/detail-grptags/detail-grptags.component';
import { EditGrptagsComponent } from './group-tags/edit-grptags/edit-grptags.component';
import { FilterPipe } from './pipes/filter.pipe';
import {Interceptor} from './_heloes/interceptor';
import {NgModule} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AddProfilComponent,
    ListProfilComponent,
    DetailProfilsComponent,
    EditProfilComponent,
    AddProfilSortieComponent,
    ListProfilSortieComponent,
    DetailPSComponent,
    EditProfilSortieComponent,
    AddGrpCComponent,
    ListGrpCComponent,
    DetailGrpCComponent,
    EditGrpCComponent,
    AddCompetenceComponent,
    ListCompetenceComponent,
    DetailCompetenceComponent,
    EditCompetenceComponent,
    AddRefComponent,
    ListRefComponent,
    DetailRefComponent,
    EditRefComponent,
    ListPromoComponent,
    AddUserComponent,
    ListUserComponent,
    DetailUserComponent,
    EditUserComponent,
    PageNotFoundComponent,
    DasbordComponent,
    AddPromoComponent,
    DetailPromoComponent,
    EditPromoComponent,
    AddGrptagsComponent,
    ListGrptagsComponent,
    DetailGrptagsComponent,
    EditGrptagsComponent,
    FilterPipe,
  ],
    imports: [
        BrowserModule,
        Routing,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        NgxQRCodeModule
    ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
