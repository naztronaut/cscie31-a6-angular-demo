import { Component, OnInit } from '@angular/core';
import {ScoreService} from '../score.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  scoreList: any;
  bowlerName: string;
  score: string;
  comments: string;
  _id = 3; // hard coded because lazy

  constructor(private scoreService: ScoreService) {}
  ngOnInit() {
    this.getScores();
  }

  // get the scores from scoreService
  getScores() {
    this.scoreList = this.scoreService.getScores();
  }

  formSubmit(): void {
    this._id++; // increase _id by 1 each time it's run for an unique ID - not necessary for implementation
    this.scoreService.addScore({
      _id: this._id,
      name: this.bowlerName,
      score: this.score,
      comments: this.comments
    });
  }
}
