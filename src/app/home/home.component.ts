import { Component, inject, OnInit } from '@angular/core';
import { IStep } from '../istep';
import { StepsService } from '../steps.service';
import { EscenaComponent } from '../escena/escena.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  steps: IStep[] = [];
  
  public stepsService = inject(StepsService)

  //constructor(public stepsService: StepsService) {}

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
  }
}
