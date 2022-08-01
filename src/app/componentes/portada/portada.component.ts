import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';
import  { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  public portada: any;


  constructor(private datosPortada:PortafolioService, private modal:NgbModal) { }

  ngOnInit(): void {
    this.datosPortada.obtenerDatos().subscribe(data => {
      
     this.portada=data.portada;
     console.log(data);
    });
  }

}

