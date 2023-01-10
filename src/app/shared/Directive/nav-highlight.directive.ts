import { Directive, ElementRef } from "@angular/core";


@Directive({
    selector: '[appNavHighlight]'
})
export class NavHighlightDirective {

    constructor(private elementRef: ElementRef) {
        this.elementRef.nativeElement.style.backgroundColor = 'red';
    }
}