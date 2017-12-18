import { Component, OnInit, Renderer2, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ColumnComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'col-sm-3');
  }

}
