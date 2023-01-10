import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector: '[appTextHover]'
})
export class TextHoverDirective implements OnInit {

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    }

    @HostListener('mouseenter') mouseenter(eventData: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
        this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '5px');
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    }


}