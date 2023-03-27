import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  examineeName: string = "";
  examineeInstructions: string =
    `write just in blue/black pen
dont use calculator
dont approach to the teacher`;
  mark: number = 8;
  finalMark(): number {
    return this.mark * 10;
  }
  check(): void {
    if (this.finalMark() > 70)
      alert("the pupile " + this.examineeName + " passed the test successfully");
    else alert("the pupile " + this.examineeName + " failed in the test");
  }
  arrQuestions: string[] = ["who...?", "what...?", "why...?", "whice...?", "where...?"];
  isEmpty(): boolean {
    return this.examineeName == "";
  }
  fontSizeStyle(): number {
    if (!this.isEmpty())
      return 50;
  }
  fontWeightStyle(): string {
    if (!this.isEmpty())
      return "bold";
  }
  bColorStyle(): string {
    if (!this.isEmpty())
      return "blue";
  }
  inputStyle(): string {
    if (this.isEmpty())
      return "red";
  }
  constructor() { }
  ngOnInit(): void {
  }
}

