import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { NgModule } from '@angular/core';
import { ServicioService } from '../servicio.service';


@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  product: any;
  page !: number;
  searchText !: string;
  constructor(private productosService : ProductService, private servicioService : ServicioService){}

  ngOnInit(){
    this.product = this.productosService.devolver();
  }
  AgregarProducto(p : any){
    this.servicioService.Agregar(p);
  }
}