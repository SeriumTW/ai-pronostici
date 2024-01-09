import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    SubscriptionComponent,
    HowItWorksComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ChatbotComponent,
    AccountComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FooterComponent, NavbarComponent, HeaderComponent],
})
export class ComponentsModule {}
