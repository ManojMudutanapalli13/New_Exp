import { Component } from '@angular/core';  

@Component({  
  selector: 'app-one',  
  standalone: false,  
  templateUrl: './one.component.html',  
  styleUrls: ['./one.component.css'],  
})  
export class OneComponent {  
  // Allow the board to have both string and null values  
  board: (string | null)[] = Array(9).fill(null);  
  currentPlayer: string = 'X';  
  playerX: string = 'Player 1';  
  playerO: string = 'Player 2';  
  winner: string | null = null;  

  makeMove(index: number) {  
    if (!this.board[index] && !this.winner) {  
      this.board[index] = this.currentPlayer;  
      this.checkWinner();  
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';  
    }  
  }  

  checkWinner() {  
    const winningCombinations = [  
      [0, 1, 2],  
      [3, 4, 5],  
      [6, 7, 8],  
      [0, 3, 6],  
      [1, 4, 7],  
      [2, 5, 8],  
      [0, 4, 8],  
      [2, 4, 6],  
    ];  

    for (const combination of winningCombinations) {  
      const [a, b, c] = combination;  
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {  
        this.winner = this.board[a];  
        return;  
      }  
    }  

    // Check for a draw  
    if (!this.board.includes(null)) {  
      this.winner = 'Draw';  
    }  
  }  

  resetGame() {  
    this.board = Array(9).fill(null);  
    this.currentPlayer = 'X';  
    this.winner = null;  
  }  
}