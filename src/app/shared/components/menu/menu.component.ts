import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  
})
export class MenuComponent {

  public MenuItems: MenuItem[]=[];

  ngOnInit() {
      this.MenuItems = [
          {
            label:'Pipe de angular',
            icon:'pi pi-desktop',
            items:[
              {
                label:'Text y fechas',
                icon:'pi pi-align-left',
                routerLink:'/'
              },
              {
                label:'Números',
                icon:'pi pi-dollar',
                routerLink:'numero'
              },
              {
                label:'No comunes',
                icon:'pi pi-globe',
                routerLink:'uncommon'
              }
            ]
          },
          {
            label:'Pipes personalizados',
            icon:'pi pi-cog',
            items:[
              {
                label:'Custom Pipes',
                icon:'pi pi-cog',
                routerLink:'custom'
              }
            ]
          }
      ];
  }

}
