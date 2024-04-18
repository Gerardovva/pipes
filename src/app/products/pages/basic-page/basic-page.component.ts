import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower:string='gerardo';
  public nameUpper:string='GERARDO';
  public fullname:string='GeRerDO';

  public customDate:Date = new Date();



}
