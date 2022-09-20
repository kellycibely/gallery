import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  linkedin = faLinkedin;
  github = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

  goLinkedin() {
    window.open('https://www.linkedin.com/in/kelly-lopes-168686149/', '_blank');
  }

  goGithub() {
    window.open('https://gist.github.com/kellycibely', '_blank');
  }

}
