import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { personas } from 'src/app/model/personas.model'; 

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  miPortafolio: any;
  persona: personas = new personas("","","","","");
  

  constructor( public portafolioService: PortafolioService, private modal:NgbModal) {}

  ngOnInit(): void {
    this.portafolioService.getPersona().subscribe(data => {
      console.log(data);
      this.persona=data;
    });

    this.portafolioService.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortafolio=data;
    });



  }

 // open(informacion: any){
  //  this.modal.open(informacion);
  //}

  
}
