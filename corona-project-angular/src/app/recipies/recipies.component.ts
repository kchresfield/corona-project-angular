import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe";

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  recipe : Recipe = {
    id: 1,
    title: "Chicken Picatta"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
