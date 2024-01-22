import { CommonModule } from '@angular/common';
import { Donut } from '../../models/donut';
import { DonutService } from './../../services/donut.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '../../models/store';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  donuts: Donut[] = [];
  selected: Donut | null = null;
  newDonut: Donut = new Donut();
  stores: Store[] = [];
  toEdit: boolean = false;
  toUpdate: Donut = new Donut();

  constructor(
    private donutServ: DonutService,
    private storeServ: StoreService
  ){}

  ngOnInit(): void {
      this.loadDonuts();
      this.loadStores();
  }

  loadDonuts(){
    this.donutServ.index().subscribe(
      {
        next: (donutList)=>{
          this.donuts = donutList;
        },
        error: (errors) =>{
          console.log('loadDunuts.donutServ.index(): error')
          console.log(errors);
        }

      }
    )
  }

  loadStores(){
    this.storeServ.index().subscribe(
      {
        next: (storeList)=>{
          this.stores = storeList;
        },
        error: (errors) =>{
          console.log('loadDunuts.donutServ.index(): error')
          console.log(errors);
        }

      }
    )
  }

  edit(){
    this.toEdit = false;
  }

  setToUpdate(){
    this.toUpdate = Object.assign({}, this.selected);
  }

  addDonut(newDonut: Donut){
    this.donutServ.create(newDonut).subscribe(
      {
        next: (returnDonut) =>{
          console.log(returnDonut);
          this.loadDonuts();
          newDonut = new Donut();

        },
        error: (errors) => {
          console.log(errors);
        }
      }
    );
  }

  updateDonut(id: number, selected: Donut){
    this.donutServ.update(id, selected).subscribe(
      {
        next: (donut)=>{
          console.log(donut);
          this.loadDonuts();
          this.selected = null;
        },
        error: (errors)=>{
          console.log("donutServ.update error: "+errors);
        }
      }
    )

  }

  selectDonut(donut: Donut){
    this.selected = donut;
    console.log(this.selected);
  }

  deleteDonut(donutId: number){
    this.donutServ.destroy(donutId).subscribe(
      {
        next: ()=>{
          this.loadDonuts();
          this.selected = null;
        },
        error: (error) => {
          console.log("donutServ.destroy error: "+error)
        }
      }
    );
  }

  getCount(count: boolean){
    let price: number = 0;
    let cals: number = 0;
    this.donuts.forEach(donut => {
      price += donut.price;
      cals += donut.calories;
    });
    return count == true ?  price.toFixed(2) : cals;

  }





}
