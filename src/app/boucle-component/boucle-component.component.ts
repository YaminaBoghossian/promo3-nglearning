import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boucle',
  templateUrl: './boucle-component.component.html',
  styleUrls: ['./boucle-component.component.css']
})
export class BoucleComponentComponent implements OnInit {
tableau:string[]=['ga', 'zo', 'bu', 'meu'];

  constructor() { }

  ngOnInit() {
  }

}
