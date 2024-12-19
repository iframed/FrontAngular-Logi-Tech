import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AppwebComponent } from './appweb/appweb.component';
import { AppswebComponent } from './appsweb/appsweb.component';
import { TransformationdigitaleComponent } from './transformationdigitale/transformationdigitale.component';
import { ProcessComponent } from './process/process.component';
import { ActualiteComponent } from './actualite/actualite.component';

export const routes: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: '', component: HomeComponent },
    { path: 'Application-Web', component: AppwebComponent },
    { path: 'Applications-Web', component: AppswebComponent },
    { path: 'Digitale', component: TransformationdigitaleComponent},
    { path: 'Process', component: ProcessComponent},
    { path: 'Actualite', component: ActualiteComponent}

];
