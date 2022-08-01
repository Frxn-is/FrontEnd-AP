import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectoList: any;

  constructor(public portafolioService: PortafolioService) { }

  ngOnInit(): void {
    this.portafolioService.obtenerDatos().subscribe(data => {
      console.log(data);
      this.proyectoList=data.proyecto;
    });
  }

}
