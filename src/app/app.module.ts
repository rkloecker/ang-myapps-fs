import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { AppsComponent } from './components/apps/apps.component';

import { AppService } from './services/app.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddappComponent } from './components/add-app/add-app.component';
import { FooterComponent } from './components/footer/footer.component';

import { RouterModule, Routes } from '@angular/router';

// const appRoutes: Routes = [
//   { path: 'home', component: AppsComponent },
//   { path: 'add',
//    component: AddappComponent },
//    { path: '',
//    redirectTo: '/',
//    pathMatch: 'full'
//  },
//  { path: '', component: AppsComponent }
//   ]

@NgModule({
  declarations: [
    AppComponent,
    AppsComponent,
    NavbarComponent,
    AddappComponent,
    FooterComponent
  ],
  imports: [
    // RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
