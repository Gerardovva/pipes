import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: '', component: BasicPageComponent },
  { path: 'uncommon', component: UncommonPageComponent },
  {path:'numero',component:NumberPageComponent},
  {path:'custom',component:OrderComponent},
  { path: '**', redirectTo:'',pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
