import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { RowComponent } from './row/row.component';
import { ColumnComponent } from './column/column.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GridComponent, RowComponent, ColumnComponent],
  exports: [GridComponent, RowComponent, ColumnComponent]
})
export class NgBootstrapGridModule { }
