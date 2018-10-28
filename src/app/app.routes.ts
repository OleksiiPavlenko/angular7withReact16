import {RouterModule, Routes} from '@angular/router';
import {AngularParentComponent} from './components/angular-parent/angular-parent.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AngularParentComponent}
];

export const RoutingModule = RouterModule.forRoot(routes);
