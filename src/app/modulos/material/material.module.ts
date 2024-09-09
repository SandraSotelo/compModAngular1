import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';


//En declaraciones se suele poner componentes que no son stand alon
@NgModule({
  declarations: [],
  imports: [
    CommonModule, //cortamos y pegamos debajo de esta linea los import que estan en
    MatCardModule, 
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    MatDividerModule
    ],

    exports: [
      CommonModule, 
      MatCardModule, 
      MatButtonModule,
      MatFormFieldModule, 
      MatInputModule, 
      MatIconModule,
      MatDividerModule
    ]
})
export class MaterialModule { }
