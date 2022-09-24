import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  @Input() className: string = 'primary';
  @Input() label: string = 'Button';
  @Input() disabled: boolean = false;

  @Output() clicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
