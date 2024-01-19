import { CommonModule } from '@angular/common';
import { Donut } from '../../models/donut';
import { DonutService } from './../../services/donut.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  constructor(
    private donutServ: DonutService
  ){}

  ngOnInit(): void {
      this.loadDonuts();
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



}
