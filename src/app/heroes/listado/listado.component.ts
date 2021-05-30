import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heros: string[] = ['hulk', 'superman', 'goku', 'iron man', 'hulk', 'superman', 'goku']

  heroBorrado: string = '';

  borrarHero() {
    const heroBoradoRet = this.heros.shift() || "";
    this.heroBorrado = heroBoradoRet;
  }
}
