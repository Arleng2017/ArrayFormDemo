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

    @HostListener('keyup') keyup(eventData: Event) {
        console.log(this.elementRef);

        let value = this.elementRef.nativeElement.value;

        if (value == '0') {
            value = "";
        }

        if (value.includes('.')) {
            let values = Array.from(value);
            const valueFiltered = values.filter(x => x == '.');
            if (valueFiltered.length == 2) {
                const valuesSplited = value.split('.');
                value = `${valuesSplited[0]}.${valuesSplited[1]}`;
            }

            const ss = value.split('.');
            if (ss[1].length > 2) {
                ss[1] = ss[1].substring(0, 2);
                value = `${ss[0]}.${ss[1]}`
            }
        }

        const valueCharacters = Array.from(value);
        let result = [];
        for (let character of valueCharacters) {
            if (Number.isInteger(Number(character)) || character == '.') {
                result.push(character);
            }
        }

        value = result.join('')
        this.elementRef.nativeElement.value = value;
    }
}