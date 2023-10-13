import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.css']
})
export class CardLabelComponent implements OnInit {

	//recebe valor de fora
	@Input()
	gameLabel:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
