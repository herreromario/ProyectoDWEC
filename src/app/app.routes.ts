import { Routes } from '@angular/router';
import { TemarioComponent } from './paginas/temario/temario.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { HomeComponent } from './paginas/home/home.component';
import { TuberiasComponent } from './paginas/tuberias/tuberias.component';
import { DependenciasComponent } from './paginas/dependencias/dependencias.component';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { BindingComponent } from './paginas/binding/binding.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Si no hay nada, se abre este
    { path: 'home', component: HomeComponent },
    { path: 'temario', component: TemarioComponent },
    { path: 'directivas', component: DirectivasComponent },
    { path: 'tuberias', component: TuberiasComponent },
    { path: 'dependencias', component: DependenciasComponent },
    { path: 'formularios', component: FormulariosComponent },
    { path: 'binding', component: BindingComponent }
];
