import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainTaskComponent } from './components/main-task/main-task.component';

const routes: Routes = [
  {
    path: '',
    component: MainTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
