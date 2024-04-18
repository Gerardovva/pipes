import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {


  //i18nselect
  public name: string = 'Gerardo';
  public gender: 'male' | 'famele' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    famele: 'invitarla',
  }


  public changeCliente(): void {
    this.name = 'melisa';
    this.gender = 'famele';
  }


  //i18plural
  public clients: string[] = ['maria', 'pedro', 'fremando', 'eduardo', 'melisa', 'natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando',
  }

  public deleteCliente(): void {
    this.clients.shift()

  }

  //keyvalue pipe
  public person = {
    name: 'gerardo',
    age: 25,
    address: 'oaxaca mexico'
  }

  //async pipi
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap', value)
    )
  ); //crea un observable que empieza a emitir valores desde 0 basada en el tiempo

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa')
    }, 3500)
  })


}
