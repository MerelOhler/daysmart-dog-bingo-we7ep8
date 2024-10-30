import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bingo-inputs',
  templateUrl: './bingo-inputs.component.html',
  styleUrls: ['./bingo-inputs.component.css'],
})
export class BingoInputsComponent implements OnInit {
  numberOfCards: number;
  rowsAndColums: number;

  constructor() {}

  ngOnInit() {}

  generate() {}
}
