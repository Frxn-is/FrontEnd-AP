import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';
import { EstudiosService } from 'src/app/servicios/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  public estudiosList: any;
  public editEstudiosList: undefined;
  public deleteEstudiosList: undefined;

  constructor(private datosEstudios: EstudiosService) { }

  ngOnInit(): void {
    this.datosEstudios.obtenerDatos().subscribe(data => {
      this.estudiosList = data.education;
    });
  }

  public onOpenModal(mode:string):void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    
    //if(mode === 'add'){
      //button.setAttribute('data-target', '#addEducationModal');
    //}else if(mode === 'delete'){
    //  button.deleteEducationList = this.educationList;
    //  button.setAttribute('data-target', '#deleteEducationModal');
    //}else if(mode === 'edit'){
    //  button.deleteEducationList =this.educationList;
   // }
  }

}
