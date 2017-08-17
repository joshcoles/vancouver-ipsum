import { Component, Input } from '@angular/core';

const VANCOUVERWORDS: VancouverWord[] = [
  { id: 1, word: 'Seawall', type: 'noun' },
  { id: 2, word: 'Mountains', type: 'noun' },
  { id: 3, word: 'Stanley Park', type: 'noun' },
  { id: 4, word: 'Lulu Lemon', type: 'noun' },
  { id: 5, word: 'Main Street', type: 'noun' },
  { id: 6, word: 'Granville', type: 'noun' },
  { id: 7, word: 'Rent', type: 'noun' },
  { id: 8, word: 'Ramen', type: 'noun' },
  { id: 9, word: 'Canucks', type: 'noun' },
  { id: 0, word: 'Rain', type: 'noun' }
];

@Component({
  selector: 'results',
  template: `
    <div class="vancouver-words">
    <span *ngFor="let word of vancouverwords">
      {{word.word}}
    </span>
  </div>
  `
})

export class Results {
  vancouverwords = VANCOUVERWORDS;
}
