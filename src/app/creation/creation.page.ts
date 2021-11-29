import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-creation',
  templateUrl: './creation.page.html',
  styleUrls: ['./creation.page.scss'],
})
export class CreationPage implements OnInit {
  currentDate: string;

  constructor() {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
  this.currentDate = date.toLocaleDateString('fr-FR');
   }

  ngOnInit() {
  }

}
