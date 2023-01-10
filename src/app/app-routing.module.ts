import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Layout/Layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'subjects'
  },
  {
    path: 'users',
    component: LayoutComponent,
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'subjects',
    component: LayoutComponent,
    loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule)
  },
  {
    path: 'questions',
    component: LayoutComponent,
    loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule)
  },
  {
    path: 'arrays',
    component: LayoutComponent,
    loadChildren: () => import('./Arrays/arrays.module').then(m => m.ArraysModule)
  },
  {
    path: 'todo',
    component: LayoutComponent,
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: 'directive',
    component: LayoutComponent,
    loadChildren: () => import('./directive/directive.module').then(m => m.DirectiveModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
