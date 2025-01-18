import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "one",
    component : OneComponent
  },
  {
    path : "two",
    component : TwoComponent
  },
  {
    path : "three",
    component : ThreeComponent
  },
  {
    path : "four",
    component : FourComponent
  },
  {
    path : "five",
    component : FiveComponent
  },
  {
    path : "six",
    component : SixComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
