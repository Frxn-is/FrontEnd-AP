import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service'; 

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  public experienciaList: any;

  constructor(private datosExperiencia: ExperienciaService) { 
    this.datosExperiencia.obtenerDatos().subscribe(data => {
      this.experienciaList = data.experiencia;
    });
  }

  ngOnInit(): void {
  }

}
