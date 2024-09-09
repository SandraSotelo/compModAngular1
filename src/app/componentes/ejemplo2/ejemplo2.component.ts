import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ejemplo1Component} from "../ejemplo1/ejemplo1.component";
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-ejemplo2',
  standalone: true,
  imports: [Ejemplo1Component, RouterLink],
  templateUrl: './ejemplo2.component.html',
  styleUrl: './ejemplo2.component.scss'
})
export class Ejemplo2Component implements OnInit, OnDestroy {
  saludo = 'Ejemplo works 2';
  imagenes = [
    "https://moderndogmagazine.com/sites/default/files/images/uploads/Inset-1_34.jpg",
    "https://media.istockphoto.com/photos/happy-shiba-inu-dog-on-yellow-redhaired-japanese-dog-smile-portrait-picture-id1202275964?k=20&m=1202275964&s=170667a&w=0&h=6AVHmiuDHVIM3zRtJKNyoEzkoEhgqSWAcrmm6FP0BzQ=",
    "https://tse3.mm.bing.net/th?id=OIP.dYhJcgDDzk8JwuQ0SngzZQHaE6&pid=Api&P=0&h=180",
    "https://www.elmueble.com/medio/2023/02/26/perro-de-raza-shiba-inu_b6387407_230226130353_900x900.jpg" 
    ] 

    imagenActual = this.imagenes[0];
  
    constructor(){}
  
  ngOnInit(): void {
    console.log('Componenete inicializado')
  }
  ngOnDestroy(): void {
    console.log('Componenete destruido')
  }
  
enviarImagen(indice: number){
this.imagenActual = this.imagenes[indice]
}

  onEmit(mensaje: string){
    this.saludo = mensaje;
  }

}
