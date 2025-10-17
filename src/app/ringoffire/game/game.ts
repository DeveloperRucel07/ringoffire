import { CommonModule } from '@angular/common';
import {Component ,ChangeDetectionStrategy, inject} from '@angular/core';
import { GameModel } from '../../models/game';
import { Player } from '../player/player';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {
  MatDialog,
} from '@angular/material/dialog';
import { Addplayer } from '../player/addplayer/addplayer';
import { Description } from './description/description';

@Component({
  selector: 'app-game',
  imports: [CommonModule,Description, Player, MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule ],
  templateUrl: './game.html',
  styleUrl: './game.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Game {
  pickCardAnimation: boolean = false;
  game: GameModel;
  currentCard:string|undefined;
  readonly name:string;
  readonly dialog = inject(MatDialog);


  constructor() {
    this.newGame();
  }

  newGame() {
    this.game = new GameModel();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      if (this.currentCard !== undefined) {
        this.game.playedCards.push(this.currentCard);
      }
      this.changePlayer();
      setTimeout(() => {
        this.pickCardAnimation = false;
      }, 1000);
    }
  }

  changePlayer(){
    this.game.currentPlayer++
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Addplayer, {
        height: '250px',
        width: '300px',
    });

    dialogRef.afterClosed().subscribe(name => {
      if(name == '' || name == undefined){
        return
      }else{
        this.game.players.push(name);
      }
    });
  }

}
