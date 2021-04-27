import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  ListaProductos: any[] = [];

  constructor() { }
  Agregar(producto : any){
    this.ListaProductos.push(producto);
  }
  retornarLista(){
    return this.ListaProductos;
  }
}
