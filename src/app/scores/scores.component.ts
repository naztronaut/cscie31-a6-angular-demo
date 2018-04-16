import { Component, OnInit } from '@angular/core';
import {ScoreService} from '../score.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  scoreList: any;

  constructor(private scoreService: ScoreService) {}
  ngOnInit() {
    this.getScores();
  }

  getScores() {
    this.scoreList = this.scoreService.getScores();
    console.log(this.scoreList);
  }

}
