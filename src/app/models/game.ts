export class GameModel{
    public players:string[] = [];
    public stack:string[] = [];
    public playedCards:string[] = [];
    public currentPlayer:number = 0;

    constructor(){
        this.addAllCards();  
    }


    addAllCards(){
        for(let i=1; i < 14; i++){
            this.stack.push('ace_'+i);
            this.stack.push('clubs_'+i);
            this.stack.push('diamonds_'+i);
            this.stack.push('hearts_'+i);
        }
        shuffle(this.stack);
    }

}


/**
 * this function takes an array of any type and returns a shuffled array of that same type.
 * @param array array of element to shuffle
 * @returns same array type
 */
export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
};
