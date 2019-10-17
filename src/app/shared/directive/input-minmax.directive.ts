
import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[inputNumber]'
})
export class MinMaxDirective{

  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
}
  @HostListener('input',['$event'])onchange(event:any){
    let value=this.el.value;
    let lastchar = value.substr(value.length - 1);
    let bool=lastchar.match(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
    if (bool){ //if last character match a regExpr
        bool=parseInt(value)>=0 && parseInt(value)<101; //and the condition required
    }
    if (!bool){ //if it does not meet the conditions
        value=value.substr(0,value.length-1);
        this.el.value=value;
        //it's necesary dispatch the event 'input' manually
        let event = new Event('input', { bubbles: true });
        this.el.dispatchEvent(event);
    }
  }
}
