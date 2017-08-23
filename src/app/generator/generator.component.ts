import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  vancouverWords = [
    { word: 'seawall' },
    { word: 'mountains' },
    { word: 'stanley park' },
    { word: 'lulu lemon' },
    { word: 'main street' },
    { word: 'granville' },
    { word: 'rent' },
    { word: 'ramen' },
    { word: 'canucks' },
    { word: 'rain' }
  ];
 displayWords = false;
 paragraph = '';
 generateText = 'Generate';

  generateParagraph() {
    for (let i = 0; i < this.vancouverWords.length; i++) {
      let index = Math.floor(this.vancouverWords.length * Math.random());
      if (i != this.vancouverWords.length - 1) {
        this.paragraph += this.vancouverWords[index].word + " ";
      } else {
        this.paragraph += this.vancouverWords[index].word;
      }
    }
    this.paragraph += ".";
    this.paragraph = this.paragraph.charAt(0).toUpperCase() + this.paragraph.slice(1);
    console.log(this.paragraph);
  }

  onGenerate() {
    this.generateParagraph();
    this.displayWords = true;
    console.log(this.displayWords);
  }





  constructor() { }

  ngOnInit() {
  }

}
