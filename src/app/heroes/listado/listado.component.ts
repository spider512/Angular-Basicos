import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {
  heroes: string[] = ['Spiderman','Irinman','Hulk','Thor','Capitan America'];
  heroesBorrados: string= ''

  borrarHeroe() {
    console.log('borrando...')
    this.heroesBorrados = this.heroes.shift() || ''
    
  }

}
