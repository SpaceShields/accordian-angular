import { trigger, state, transition, style, animate } from '@angular/animations';
import { Component, ElementRef, HostBinding, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-filter-content',
  templateUrl: './filter-content.component.html',
  styleUrls: ['./filter-content.component.css'],
  animations: [
    trigger('grow', [
      transition('void <=> *', []),
      transition('* <=> *', [
        style({height: '{{startHeight}}px', opacity: 1}),
        animate('1s ease-in-out')
      ], {params: {startHeight: 0}}),
      
    ])
  ]
})
export class FilterContentComponent implements OnChanges {

  @Input() isOpen: boolean = false;

  showContent: boolean = this.isOpen;

  startHeight: number = 0;

  constructor(private element: ElementRef) { }

  @HostBinding('@grow') get grow() {
    return {value: this.isOpen, params: {startHeight: this.startHeight}};
  }

  setStartHeight() {
    this.startHeight = this.element.nativeElement.clientHeight;
  }

  ngOnChanges() {
    this.setStartHeight();
  }

}
