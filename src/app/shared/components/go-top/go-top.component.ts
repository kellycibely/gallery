import {Component, OnInit, HostListener} from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.css']
})
export class GoTopComponent implements OnInit {


  display: string = 'none';
  icon: IconDefinition;
  visible: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scroll();
  }

  constructor() {
    this.icon = faArrowUp;
  }

  ngOnInit(): void {
  }

  scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.display = 'block';
      this.visible = true;
      // document.getElementById("myBtn").style.display = "block";
    } else {
      this.display = 'none';
      this.visible = false;
      // document.getElementById("myBtn").style.display = "none";
    }
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
