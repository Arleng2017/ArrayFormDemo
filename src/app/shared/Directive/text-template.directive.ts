import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appTextTemplate]'
})
export class TextTemplateDirective implements OnInit {

    @Input() defaultColor: string = 'white';
    @Input('appTextTemplate') inputColor: string = 'red';

    @HostBinding('style.backgroundColor') backgroundColor: String = this.defaultColor;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '20px');
        this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', 'bold');
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white')
        this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '1rem');
        this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '5px');

        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#eeeeee');
        this.backgroundColor = this.inputColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
        this.backgroundColor = this.defaultColor;
    }

}