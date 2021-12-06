import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-row',
  templateUrl: './edit-row.component.html',
  styleUrls: ['./edit-row.component.scss']
})
export class EditRowComponent implements OnInit {

  isEditing = false;
  @Input() propertyLabel?: string;
  @Input() propertyName?: string;
  @Input() value?: string;
  @Output() valueChanged = new EventEmitter<{ propertyLabel: string, propertyName: string, value: string }>();
  @ViewChild('input') inputElement?: ElementRef;

  constructor() {}

  ngOnInit(): void {
  }

  saveClicked(): void {
    if (this.propertyLabel !== undefined && this.propertyName !== undefined && this.value !== undefined) {
      this.valueChanged.emit({
        propertyLabel: this.propertyLabel,
        propertyName: this.propertyName,
        value: this.inputElement?.nativeElement.value
      });
    }
    this.isEditing = false;
  }
  deleteClicked(): void {
    if (this.propertyLabel !== undefined && this.propertyName !== undefined) {
      this.valueChanged.emit({
        propertyLabel: this.propertyLabel,
        propertyName: this.propertyName,
        value: ''
      });
    }
    this.isEditing = false;
  }

  switchIsEditing(): void {
    this.isEditing = !this.isEditing;
  }

}
