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
    { word: 'vancouver' },
    { word: 'government' },
    { word: 'expensive' },
    { word: 'property' },
    { word: 'rain' },
    { word: 'cambie' },
    { word: 'translink' },
    { word: 'overdose' },
    { word: 'skytrain' },
    { word: 'false creek' },
    { word: 'broadway' },
    { word: 'whitecaps' },
    { word: "arby's" },
    { word: 'lions' },
    { word: 'gastown' },
    { word: 'commercial' },
    { word: 'heading up to whistler' },
    { word: 'vancouverites' },
    { word: 'developers' },
    { word: 'I just need to be close to the mountains' },
    { word: 'west coast best coast' },
    { word: 'namaste' },
    { word: '#blesst' },
    { word: 'sedins' },
    { word: 'new brunch spot on main street' },

  ];
 displayWords = false;
 paragraph = '';
 paragraphs = []
 instructions = 'How many paragraphs of vancouver ipsum do you want?'
 generateText = 'Generate';
 submitted = false;
 paragraphNumber = 1;

  onSubmit() {
    this.submitted = true;
  }

  onUpdateParagraphNumber(event: any){
    this.paragraphNumber = parseInt(event.srcElement.value);
    console.log(this.paragraphNumber);
  }

  generateParagraph() {
    let newParagraph = '';
    for (let i = 0; i < this.vancouverWords.length; i++) {
      let index = Math.floor(this.vancouverWords.length * Math.random());
      if (i != this.vancouverWords.length - 1) {
        newParagraph += this.vancouverWords[index].word + " ";
      } else {
        newParagraph += this.vancouverWords[index].word;
      }
    }
    newParagraph += ".";
    newParagraph = newParagraph.charAt(0).toUpperCase() + newParagraph.slice(1);
    this.paragraphs.push(newParagraph);
    console.log(this.paragraphs);
    console.log("paragraphNumber: " + this.paragraphNumber);
  }

  onGenerate() {
    for (var i = 0; i < this.paragraphNumber; i++) {
      this.generateParagraph();
      console.log("I'm looping: " + i);
    }
    this.displayWords = true;
    console.log(this.displayWords);
  }

  constructor() { }

  ngOnInit() {
  }

}
