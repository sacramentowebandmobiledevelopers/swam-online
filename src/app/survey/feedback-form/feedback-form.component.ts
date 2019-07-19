import { Component, OnInit } from '@angular/core';
import { QuestionBase } from 'src/app/shared/dynamic-form/question-base';
import { DropdownQuestion } from './../../shared/dynamic-form/question-dropdown';
import { TextboxQuestion } from './../../shared/dynamic-form/question-textbox';

@Component({
  selector: 'swam-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
  questions: QuestionBase<any>[];

  constructor() { }

  ngOnInit() {
    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'quality',
        label: 'Quality Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'questionable', value: 'Questionable' },
          { key: 'detrimental', value: 'Detrimental' }
        ],
        order: 2
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Ted',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 1
      })
    ];

    this.questions = questions.sort((a, b) => a.order - b.order);
  }
}
