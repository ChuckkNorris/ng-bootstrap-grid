import { Component, OnInit, Renderer2, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RowComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'row');
  }

}
