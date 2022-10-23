import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomhilighter]'
})
export class CustomhilighterDirective {

  constructor(public el:ElementRef) { }
@HostListener('mouseenter')usermouseEnter(){
this.el.nativeElement.style.backgroundColor="green";
}
@HostListener('mouseleave')usermouseLeave(){
  this.el.nativeElement.style.backgroundColor="";
}
}
