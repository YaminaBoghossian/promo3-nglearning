import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
tableau:string[]=[
'Json',
'Jquery',
'CSS',
'Angular'
];
newTodo:string;

  constructor() { }

  ngOnInit() {
  }
//ajouter methode qui ajoute et remove items
  addTodo(){
    this.tableau.push(this.newTodo);
  }
 removeTodo(index:number){
this.tableau.splice(index,1);
 }
}
