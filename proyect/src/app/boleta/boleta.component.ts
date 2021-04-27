import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import { CarroComponent } from '../carro/carro.component.js';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css']
})
export class BoletaComponent implements OnInit {
  
  constructor() {       
  }

  archivo: any[] = [];
  ngOnInit(): void {
  }
  


}
