import { Component, OnInit,Input } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
  ListaProductos: any[] = [];
  cantidad:number=0;

  constructor(private carro:ServicioService) {
    
    this.ListaProductos=this.carro.retornarLista()
    
   }

  ngOnInit(): void {
  }

  disminuir(p :any){
    p.carro--;
  }

  aumentar(p :any){
    p.carro++;
  }
  eliminar( index: string) {
  
    let codigoBorrar = 0;
    let cont = 0 ;
    for( let x of this.ListaProductos){
      if (x.codigo == index){
        codigoBorrar = cont
      } 
      cont += 1;
    }
  
    this.ListaProductos.splice(codigoBorrar,1); 
   
  }
 

}
