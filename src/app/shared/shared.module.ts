import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ion
import { IonicModule } from '@ionic/angular';

//components
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    BottomNavigationComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    BottomNavigationComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
