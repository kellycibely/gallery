import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  animate,
  AnimationEvent,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export type FadeState = 'visible' | 'hidden';

@Component({
  selector: 'app-fade',
  templateUrl: './fade.component.html',
  styleUrls: ['./fade.component.css'],
  animations: [
    trigger('state', [
      state(
        'visible',
        style({
          opacity: '1'
        })
      ),
      state(
        'hidden',
        style({
          opacity: '0'
        })
      ),
      transition('* => visible', [animate('500ms ease-out')]),
      transition('visible => hidden', [animate('500ms ease-out')])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FadeComponent implements OnInit {

  @Input() 
  set show(value: boolean) {
    if (value) {
      this._show = value;
      this.state = 'visible';
    } else {
      this.state = 'hidden';
    }
  }

  get show() {
    return this._show;
  }

  private _show!: boolean;
  state!: FadeState;
  constructor() { }

  ngOnInit(): void {
  }

  animationDone(event: AnimationEvent | any) {
    if (event.fromState === 'visible' && event.toState === 'hidden') {
      this._show = false;
    }
  }

}
