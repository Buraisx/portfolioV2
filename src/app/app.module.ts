// @angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material 2
import { MatToolbarModule } from '@angular/material';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from './../environments/environment';
// App components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { AbilityListComponent } from './ability-list/ability-list.component';
import { StackListComponent } from './stack-list/stack-list.component';
// Extra modules
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    NavbarComponent,
    ProjectsComponent,
    FooterComponent,
    AbilityListComponent,
    StackListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatToolbarModule,
    ScrollToModule.forRoot(),
  ],
  exports: [
    MatToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
