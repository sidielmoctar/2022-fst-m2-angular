import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userAdmin'
})
export class UserPipe implements PipeTransform {

  transform(value: any[]): any {
    return value.filter(u => u.is_admin);
  }

}
