import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ScoreService {

  scores: any = [
    {
      _id: 1,
      name: 'Naz',
      score: 300,
      gameNumber: 1,
      comments: 'it was a fun game'
    },
    {
      _id: 2,
      name: 'Nazmus',
      score: 150,
      gameNumber: 12,
      comments: 'Need more practice'
    },
    {
      _id: 3,
      name: 'Abby',
      score: 300,
      gameNumber: 1,
      comments: 'Woo 300!'
    }
  ];

  constructor() { }

  getScores() {
    return this.scores;
  }

}
