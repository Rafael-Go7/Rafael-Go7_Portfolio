import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './0_header/header.component';
import { FrontPageComponent } from './1_front-page/front-page.component';
import { AboutMeComponent } from './2_about-me/about-me.component';
import { SkillsSetComponent } from './3_skills-set/skills-set.component';
import { PortfolioComponent } from './4_portfolio/portfolio.component';
import { ContactComponent } from './5_contact/contact.component';
import { FooterComponent } from './6_footer/footer.component';
import { LegalComponent } from './7_legal/legal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    FrontPageComponent,
    SkillsSetComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    LegalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
