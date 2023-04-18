import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  styleUrls: ['./input-button-unit.component.scss'],
  template: `
    <input
      class="todo-input"
      #inputElementRef
      [value]="title"
      (keyup.enter)="submitValue(inputElementRef.value.trim())"
    />
    <button class="btn" (click)="submitValue(inputElementRef.value.trim())">
      Save
    </button>
  `,
})
export class InputButtonUnitComponent implements OnInit {
  title = '';
  ngOnInit(): void {}
  constructor() {}
  // submit event with value to list manager component
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
