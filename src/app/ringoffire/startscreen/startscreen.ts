import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startscreen',
  imports: [],
  templateUrl: './startscreen.html',
  styleUrl: './startscreen.scss'
})
export class Startscreen {
  constructor(private router: Router){

  }
  
  newGame(){
    //start game
    this.router.navigateByUrl('game')
  }
}
