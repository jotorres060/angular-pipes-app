import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customuppercase'
})
export class CustomUppercasePipe implements PipeTransform {

    transform(value: string, isUppercase: boolean = false): string {
        return (isUppercase)
            ? value.toUpperCase()
            : value.toLocaleLowerCase();
    }

}