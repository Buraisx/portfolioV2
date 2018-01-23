import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Firebase 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';

// Routes variable
const routes: Routes = [
	{
		path: 'landing',
		component: LandingComponent
	},
	{
		path: 'about',
		component: AboutComponent
	}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
    	routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
