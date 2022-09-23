import {Component, Input, OnInit} from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  @Input() routerLogo: string = '';
  linkedin = faLinkedin;
  github = faGithub;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goLinkedin() {
    window.open('https://www.linkedin.com/in/kelly-lopes-168686149/', '_blank');
  }

  goGithub() {
    window.open('https://gist.github.com/kellycibely', '_blank');
  }

  redirect() {
    this.router.navigateByUrl(this.routerLogo);
  }
}
