import { Component, Input } from '@angular/core';
import { IStep } from '../istep';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { trigger, transition, query, style, animate, group } from '@angular/animations';

const left = [
  query(':enter, :leave', style({ position: 'absolute', width: '100%', opacity: 0 }), { optional: true }),
  group([
    query(':enter', [style({ opacity: 0 }), animate('0.5s ease-in', style({ opacity: 1 }))], { optional: true }),
    query(':leave', [style({ opacity: 1 }), animate('0.5s ease-out', style({ opacity: 0 }))], { optional: true }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'absolute', width: '100%', opacity: 0 }), { optional: true }),
  group([
    query(':enter', [style({ opacity: 0 }), animate('0.5s ease-in', style({ opacity: 1 }))], { optional: true }),
    query(':leave', [style({ opacity: 1 }), animate('0.5s ease-out', style({ opacity: 0 }))], { optional: true }),
  ]),
];

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss'],
  animations: [
    trigger('animImageSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ]
})

export class EscenaComponent {
  @Input() steps: IStep[] = [];
  
  currentStep: number = 0;

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  goToStep(index: number) {
    this.currentStep = index;
  }
}