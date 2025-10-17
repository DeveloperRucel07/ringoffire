import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-addplayer',
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './addplayer.html',
  styleUrl: './addplayer.scss'
})
export class Addplayer {
   name:string;
    constructor(){

    }

    addPlayer(){

    }
}
