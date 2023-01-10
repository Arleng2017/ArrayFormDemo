import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'capitalLetter'
})
export class CapitalLettterPipe implements PipeTransform {

    transform(word: string) {
        const firstLetter = word.charAt(0).toUpperCase();
        word = word.toLowerCase();
        word = word.substring(1);
        const newWord = firstLetter + word;
        return newWord;
    }

}