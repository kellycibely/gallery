import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {WindowService} from "../../core/services/window.service";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  mqAlias: string = 'md';

  constructor(private router: Router, private windowService: WindowService) { }

  ngOnInit(): void {
    this.windowService.mqAlias$.subscribe(mqAlias => {
      if (mqAlias) {
        this.mqAlias = mqAlias;
        // console.log(mqAlias);
      }
    });
  }

  goHome() {
    this.router.navigateByUrl('');
  }
}
