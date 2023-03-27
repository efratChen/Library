import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  isAdded: boolean = true;
  classList: string = "info border";
  classArr: string[] = [];

  classListFunc(): string {
    return "border big-text";
  }

  addBorder(): void {
    this.classArr.push("border")
  }

  bigText(): void {
    this.classArr.push("big-text")
  }

  getColor(): string {
    return "green";
  }
  classObj: any = { "danger": 9 > 10, "big-text": this.isAdded };

  styleObj: any = { "background-color": "purple", "font-size.px": 18 };
  styleObj2: any = { "background-color": 10 > 2 ? "purple" : this.getColor, "font-size.px": 4 * 5 };
  ngOnInit() { }
}