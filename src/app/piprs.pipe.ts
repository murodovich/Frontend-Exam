import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piprs',
  standalone: true
})
export class PiprsPipe implements PipeTransform {

  transform(value: string): string {
    return "http://185.217.131.187:5117/" + value;
  }

  // http://localhost:5117/media//images//IMG_fb2231af-071f-4a6b-9fe1-9c61bf630fb2.png
}
