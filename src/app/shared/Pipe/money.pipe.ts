import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'money'
})
export class MoneyPipe implements PipeTransform {
    transform(money: string) {
    }

}