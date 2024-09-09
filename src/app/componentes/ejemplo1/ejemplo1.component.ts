import { Component, EventEmitter,  Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MaterialModule } from '../../modulos/material/material.module';
import { FormsModule } from '@angular/forms';


export interface Persona {
  nombre: string
  imagen: string
}


@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.scss'
})
export class Ejemplo1Component implements OnChanges{
 
  ngOnChanges(changes: SimpleChanges): void {
    window.alert('Imagen cambiada, alerta disparada desde el componente hijo')
  }

  @Input() imagenDelPadre: string = '';
  @Output() emisor = new EventEmitter<string>();
  imagen = "https://material.angular.io/assets/img/examples/shiba2.jpg"

  nombre='';
  nombres: Persona[] = [
    {nombre: 'Andres', imagen: "https://tse1.mm.bing.net/th?id=OIP.xT7Z1IcYfCP6ifEnqLWD_QHaIJ&pid=Api&P=0&h=180"}, 
    {nombre: 'Juan Carlos', imagen: "https://tse4.mm.bing.net/th?id=OIP.Eepcs-ntKd1ovWQs1M2hKwHaHa&pid=Api&P=0&h=180"}, 
   {nombre: 'Lorena', imagen: "https://tse4.mm.bing.net/th?id=OIP.KOJZnbRf5KEzFqWA_gCmpAHaEX&pid=Api&P=0&h=180"}

    ]

  
setName(){
  this.nombre='Darth Vader';
}

alerta(nombre: string){
  if(nombre === 'Darth Vader'){
    window.alert('Soy tu padre');
  }
}

}
