import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input()
  modalTitle!: string;
  @Input() data: any;
  @Input()
  detailRef!: TemplateRef<any>;
  @Input() disabled: true | false = false;
  @Output() close = new EventEmitter<any>();
  @Output() submit = new EventEmitter<any>();

  cancel() {
    this.close.emit();
  }
  confirm() {
    this.submit.emit();
  }
}
