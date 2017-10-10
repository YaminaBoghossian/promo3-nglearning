import { Component, OnInit } from '@angular/core';
import { Chien } from '../shared/chien';
import { ActivatedRoute } from '@angular/router';
import { ChienService } from '../shared/chien/chien.service';


@Component({
  selector: 'app-fichechien',
  templateUrl: './fichechien.component.html',
  styleUrls: ['./fichechien.component.css']
})
export class FicheChienComponent implements OnInit {
chien:Chien = {
  id:1,
  nom:'placeholder name',
  race:'placeholder race',
  dateNaissance: new Date()
};
constructor(private route:ActivatedRoute,
private chienService:ChienService) { }

 ngOnInit() {
  this.route.params.subscribe((params) => console.log(params));
  }
 

}
