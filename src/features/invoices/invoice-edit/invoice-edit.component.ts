import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICustomer, IInvoice, ITask, ITax, IUser } from '@services/model.service';

@Component({
  selector: 'invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css'],
})
export default class InvoiceEditComponent {
  @Input() customers: ICustomer[];
  @Input() invoice: IInvoice;
  @Input() availableTaxes: ITax[];
  @Output() onBusinessChange = new EventEmitter<IUser>();
  @Output() onAddCustomer = new EventEmitter<ICustomer>();
  @Output() onEditCustomer = new EventEmitter<ICustomer>();
  @Output() onRemoveCustomer = new EventEmitter<void>();
  @Output() onSelectCustomer = new EventEmitter<string>();
  @Output() onEditLocation = new EventEmitter<string>();
  @Output() onEditDate = new EventEmitter<string>();
  @Output() onEditNumber = new EventEmitter<string>();
  @Output() onAddTask = new EventEmitter<ITask>();
  @Output() onEditTask = new EventEmitter<ITask>();
  @Output() onRemoveTask = new EventEmitter<string>();
  @Output() onAddTax = new EventEmitter<void>();
  @Output() onAddInvoiceTax = new EventEmitter<string>();
  @Output() onEditTax = new EventEmitter<ITax>();
  @Output() onRemoveTax = new EventEmitter<string>();
  @Output() onNotesChange = new EventEmitter<string>();

  handleEvent(emitterName: string, event = null) {
    this[emitterName].emit(event);
  }
}