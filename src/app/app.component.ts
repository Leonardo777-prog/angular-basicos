import { Component } from '@angular/core';

@Component({
  // nombre del componente, de la etiqueta
  selector: 'app-root',
  // direccion de la plantilla html
  templateUrl: './app.component.html',
  // direccion de la hoja de estilos
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Contador App';
}
