import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";


@Directive({
    selector: '[appBodyScale]'
})
export class BodyScaleDirective implements OnInit {

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
    }

    @HostListener('keyup') keyup(eventData: Event) {

        let value = this.elementRef.nativeElement.value;

        if (value == '0' || value == '.') {
            value = "";
        }

        if (value.includes('.')) {
            let values = Array.from(value);
            const valueFiltered = values.filter(x => x == '.');
            if (valueFiltered.length == 2) {
                const valuesSplited = value.split('.');
                value = `${valuesSplited[0]}.${valuesSplited[1]}`;
            }

            const valueDotSplit = value.split('.');
            if (valueDotSplit[1].length > 2) {
                valueDotSplit[1] = valueDotSplit[1].substring(0, 2);
                value = `${valueDotSplit[0]}.${valueDotSplit[1]}`
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