import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'produts-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {


  public isUpperCase: boolean = false;
  public ordrBy: keyof Hero | undefined | '' = ''

  public heros: Hero[] = [
    {
      name: 'superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'daradevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'linterna verde',
      canFly: false,
      color: Color.green,
    },



  ]


  toggleUpercase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.ordrBy = value;
  }



}
