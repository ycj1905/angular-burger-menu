import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerMenuComponent } from './burger-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [BurgerMenuComponent],
  exports: [BurgerMenuComponent]
})
export class BurgerMenuModule { }
