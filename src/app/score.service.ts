import { Injectable } from '@angular/core';

@Injectable()
export class ScoreService {

  scores: any = [
    {
      _id: 1, name: 'Naz', score: 300, gameNumber: 1, comments: 'it was a fun game'
    },
    {
      _id: 2, name: 'Nazmus', score: 150, gameNumber: 12, comments: 'Need more practice'
    },
    {
      _id: 3, name: 'Abby', score: 300, gameNumber: 1, comments: 'Woo 300!'
    }
  ];

  // READ service
  getScores() {
    return this.scores;
  }

  // push incoming object to the scores array
  addScore(obj: any) {
    this.scores.push(obj);
  }
}
