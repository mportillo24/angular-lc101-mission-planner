import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   cargoButtonDisabled: boolean = true;
   bgColor: string = 'lightpink';
   remainingMass: number = this.maximumAllowedMass;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(equipment: object) {
     this.cargoHold.push(equipment);
     this.cargoMass += equipment['mass'];
     this.remainingMass -= equipment['mass']
     if (this.cargoHold.length === this.maxItems || (this.cargoMass + equipment['mass']) >= this.maximumAllowedMass) {
       this.cargoButtonDisabled = false;
     }
     if (this.cargoMass > 1800) {
       return false;
     } else {
        return true;
      }
   }



   emptyHold() {
     this.cargoHold = [];
     this.cargoMass = 0;
     this.cargoButtonDisabled = true;
     this.remainingMass = this.maximumAllowedMass;
   }
   
}
