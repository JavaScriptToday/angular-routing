import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'services', component: ServicesPageComponent},
    {path: 'contact', component: ContactPageComponent}
];
