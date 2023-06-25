import { NgModule } from '@angular/core';
import { UmsLibComponent } from './ums-lib.component';
import { CardListComponent } from './card-list/card-list.component';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    UmsLibComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    UmsLibComponent,
    CardListComponent
  ]
})
export class UmsLibModule { }
