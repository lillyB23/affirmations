import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { AffirmationListComponent } from './affirmations/affirmation-list/affirmation-list.component';
import { AffirmationDetailComponent } from './affirmations/affirmation-detail/affirmation-detail.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SubscribeComponent,
    AffirmationListComponent,
    AffirmationDetailComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
