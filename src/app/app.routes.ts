import { Routes } from '@angular/router';
import { BoucleComponent } from './boucle/boucle.component';
import { TemplateComponent } from './template/template.component';
import { TodoComponent } from './todo/todo.component';
import { TodoSecondComponent } from './todo-second/todo-second.component';
import { ListeChienComponent } from './liste-chien/liste-chien.component';
import { Page404Component } from './page404/page404.component';
import { FicheChienComponent } from './fichechien/fichechien.component';

export const AppRoutes:Routes = [
    {path: 'boucle', component: BoucleComponent},
    {path: 'template', component: TemplateComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'todo-second', component: TodoSecondComponent},
    {path: 'chien', component: ListeChienComponent},
    
    {path:'fichechien/:id', component: FicheChienComponent},
    //le path avec rien dedans est la racine//
    {path: '',pathMatch:'full', redirectTo:'/chien'},
    //On fait un component page not found pour les cas ou lurl est mal tapé ...//
    {path: '**', component:Page404Component}
   
];