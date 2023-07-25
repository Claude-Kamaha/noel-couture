import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  imageURL=''
  transform(value:any): unknown {
    const reader = new FileReader();
    reader.onload = () => {
      value= reader.result as string;
    }
   
    return  value;
  }
 
}
