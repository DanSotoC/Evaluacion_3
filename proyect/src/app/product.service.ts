import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor() { }
  
  devolver(){
      return[
        {
          codigo: 1001, 
          nombreProducto: "RAM-8GB",
          precio: 15000,
          stock: 20,
          file:"./assets/ram8.jpg",
          carro: 1
        },
        {
          codigo: 1002, 
          nombreProducto: "RAM-16GB",
          precio: 32000,
          stock: 45,
          file:"./assets/ram16.jpg",
          carro: 1
        },
        {
          codigo : 2001, 
          nombreProducto: "AMD RYZEN 5",
          precio: 100000,
          stock: 2,
          file:"./assets/rizen5.jpg",
          carro: 1
        },
        {
          codigo : 3001, 
          nombreProducto: "GEFORCE RTX 3070",
          precio: 650000,
          stock: 3,
          file:"./assets/rtx3070.jpg",
          carro: 1
        },
        {
          codigo: 3002, 
          nombreProducto: "GIGABYTE 2060",
          precio: 400000,
          stock: 30,
          file:"./assets/rtx2060.jpg",
          carro: 0
        },
        {
          codigo : 4001, 
          nombreProducto: "AORUS B450",
          precio: 100000,
          stock: 3,
          file:"./assets/aorusb450.jpg",
          carro: 1
        },
        {
          codigo: 4002, 
          nombreProducto: "AORUS B550",
          precio: 120000,
          stock: 5,
          file:"./assets/aorusb550.jpg",
          carro: 1
        },
        {
          codigo: 5001, 
          nombreProducto: "F. 80 PLUS GOLD",
          precio: 90000,
          stock: 12,
          file:"./assets/fuente80pls.jpg",
          carro: 1
        },
        {
          codigo: 1003, 
          nombreProducto: "RAM-2GB",
          precio: 6000,
          stock: 120,
          file:"./assets/ram2.jpg",
          carro: 1
        },
        {
          codigo: 1004, 
          nombreProducto: "RAM-4GB",
          precio: 8000,
          stock: 45,
          file:"./assets/ram4.jpg",
          carro: 1
        },
        {
          codigo : 2002, 
          nombreProducto: "AMD RYZEN 3",
          precio: 75000,
          stock: 2,
          file:"./assets/ryzen3.jpg",
          carro: 1
        },
        {
          codigo : 2003, 
          nombreProducto: "AMD RYZEN 7",
          precio: 650000,
          stock: 3,
          file:"./assets/ryzen7.jpg",
          carro: 1
        },
        {
          codigo: 3003, 
          nombreProducto: "GIGABYTE 2060 S",
          precio: 3250000,
          stock: 30,
          file:"./assets/rtx2060s.jpg",
          carro: 1
        },
        {
          codigo: 6001, 
          nombreProducto: "MONITOR 144 HZ",
          precio: 200000,
          stock: 12,
          file:"./assets/monitor.jpg",
          carro: 1
        },

    ]
  }
  


}

