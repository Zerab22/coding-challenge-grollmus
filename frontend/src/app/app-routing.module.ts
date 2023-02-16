import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'detail/:id', component: DetailViewComponent},
  { path: '**', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
