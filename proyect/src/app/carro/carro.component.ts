import { Component, OnInit,Input } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {PdfMakeWrapper} from "pdfmake-wrapper";
import { Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
  ListaCarro: any[] = [];
  cantidad:number=0;
   
  constructor(public carro:ServicioService) {
    
    this.ListaCarro=this.carro.retornarLista()
    
   }

  ngOnInit(): void {
  }

  disminuir(p :any){ p.carro--; }

  aumentar(p :any){ p.carro++; }

  eliminar( index: string) 
    {
      let codigoBorrar = 0;
      let cont = 0 ;
      for( let x of this.ListaCarro){
        if (x.codigo == index){
          codigoBorrar = cont
        } 
        cont += 1;
      }
    
      this.ListaCarro.splice(codigoBorrar,1); 
    }


}
