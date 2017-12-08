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
    { word: 'sedins' },
    { word: 'new brunch spot on main street' },
  ];

  displayWords = false;

  // Each paragraph is generated uniquely and pushed into 'paragraphs' array
  paragraph = '';
  paragraphs = []


  // Sets default paragraph number. This changes any time
  // the user changes the number, and is not tied to the
  // actual 'submit';

  paragraphNumber = 1;
  instructions = 'How many paragraphs of vancouver ipsum do you want?'
  generateText = 'Generate';


  // TODO error handling for if user types in a letter
  // input comes in as string, so this turns it to number
  onUpdateParagraphNumber(event: any){
    this.paragraphNumber = parseInt(event.srcElement.value);
  }


  // TODO remove duplicate words from same paragarph
  // This function generates a new paragraph for each
  // number in 'paragraphNumber', pushes it into 'paragraphs',
  // and displays it
  onGenerate() {
    let newParagraph = "";
    this.displayWords = true;

    // Checks if it's the last loop. If not, add a space
    // after word
    for (var i = 0; i < this.paragraphNumber; i++) {
      for (let i = 0; i < this.vancouverWords.length; i++) {
        let index = Math.floor(this.vancouverWords.length * Math.random());
        if (i != this.vancouverWords.length - 1) {
          newParagraph += this.vancouverWords[index].word + " ";
        } else {
          newParagraph += this.vancouverWords[index].word;
        }
      }

      // Capitalizes first letter + add period at end
      newParagraph += ".";
      newParagraph = newParagraph.charAt(0).toUpperCase() + newParagraph.slice(1);
      this.paragraphs.push(newParagraph);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
