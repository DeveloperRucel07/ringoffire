import { Routes } from '@angular/router';
import { Startscreen } from './ringoffire/startscreen/startscreen';
import { Game } from './ringoffire/game/game';

export const routes: Routes = [
    {path:'', component: Startscreen},
    {path:'game', component: Game},

];
