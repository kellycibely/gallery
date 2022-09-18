import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css']
})
export class GradientComponent implements OnInit {

  constructor() { }

  @Input() postion: string = 'bottom'
  @Input() initialGradientColor: string = ' rgba(255,0,0,0)'
  @Input() finalGradientColor: string = 'rgb(255, 255, 255)'

  ngOnInit(): void {
  }

}
