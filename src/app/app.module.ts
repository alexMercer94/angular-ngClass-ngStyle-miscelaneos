import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ClassesComponent } from '../components/classes/classes.component';
import { CssComponent } from '../components/css/css.component';
import { HomeComponent } from '../components/home/home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { NgStyleComponent } from '../components/ng-style/ng-style.component';
import { NgSwitchComponent } from '../components/ng-switch/ng-switch.component';
import { DetailUserComponent } from '../components/usuario/detail-user.component';
import { EditUserComponent } from '../components/usuario/edit-user.component';
import { NewUserComponent } from '../components/usuario/new-user.component';
import { UsuarioComponent } from '../components/usuario/usuario.component';
import { ResaltadoDirective } from '../directives/resaltado.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// * AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClassesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    NewUserComponent,
    EditUserComponent,
    DetailUserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
