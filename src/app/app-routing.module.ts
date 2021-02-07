import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainTaskComponent } from './components/main-task/main-task.component';
import { InfoPageComponent } from './components/info-page/info-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainTaskComponent
  },
  {
    path: 'info',
    component: InfoPageComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
