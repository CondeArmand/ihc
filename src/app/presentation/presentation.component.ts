import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor() { }

  redirectToExternalUrl(url: string): void {
    window.open(url, '_blank');
  }

  ngOnInit() {
  }

}
