import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { SettingComponent } from './setting/setting.component';

// const routes: Routes = [];
const routes: Routes = [
 // {path:'', redirectTo:"setting", pathMatch:"full"},
 { path: "setting", component : SettingComponent},
{ path:'help', component : HelpComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[SettingComponent, HelpComponent]
