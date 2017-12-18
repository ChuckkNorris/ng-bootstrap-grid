import { Component, OnInit, Renderer2, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  // styles:[
  //  gridStyles
  // ]
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'container');
  }

}
