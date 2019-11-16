import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';



@Component({
    selector: 'app-movimientos',
    templateUrl: './movimientos.page.html',
    styleUrls: ['./movimientos.page.scss'],
  })
  export class MovimientosPage implements OnInit {
  
    public Movimientos;
    
  
    constructor(public modalController: ModalController,) { }
  
    ngOnInit() {
      
        this.Movimientos = [
            {
                descripcion: '7-eleven',
                cantidad: -18,
                tipo: 2, //1-Ingreso, 2 egreso
                cuenta: {
                  nombre: 'BBVA',
                  id: 1
                },
                etiqueta: {
                    id: 1,
                    descripcion: 'Comida'
                },
                fecha: '2019-11-08'
            }
          ];
      
    }
  }