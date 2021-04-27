import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component{


  domicilio: any[] = [];
  formulario: FormGroup = new FormGroup({
    pais: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    region: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    ciudad: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    calle: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    cod_postal: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    card: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    cvv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    expiracion: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    
  });
  get pais() { return this.formulario.get('pais'); };
  get region() { return this.formulario.get('region'); };
  get ciudad() { return this.formulario.get('ciudad'); };
  get calle() { return this.formulario.get('calle'); };
  get cod_postal() { return this.formulario.get('cod_postal'); };
  get nombre() { return this.formulario.get('nombre'); };
  get card() { return this.formulario.get('card'); };
  get cvv() { return this.formulario.get('cvv'); };
  get expiracion() { return this.formulario.get('expiracion'); };
  

  addData() {
    if (this.formulario.valid) {
      this.domicilio.push({
        "pais": this.formulario.controls["pais"].value,
        "region":this.formulario.controls["region"].value,
        "ciudad": this.formulario.controls["ciudad"].value,
        "calle": this.formulario.controls["calle"].value,
        "cod_postal": this.formulario.controls["cod_postal"].value,
        "nombre": this.formulario.controls["nombre"].value,
        "card": this.formulario.controls["card"].value,
        "cvv": this.formulario.controls["cvv"].value,
        "expiracion": this.formulario.controls["expiracion"].value,
      });
      this.formulario.reset();
      alert("Boleta Generada Correctamente");
      console.log(this.domicilio);
    }

  };


}


class Domicilio {
  constructor(public pais: string, public region: string, public ciudad: string, public calle: string, public cod_postal: number, public nombre: string, public card: string, public cvv: number, public expiracion: string) {

  }

}