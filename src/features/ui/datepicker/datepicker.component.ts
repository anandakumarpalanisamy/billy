import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import * as moment from 'moment';
import pikaday = require('pikaday');
import 'pikaday/css/pikaday.css';

@Component({
  selector: 'datepicker',
  template: require('./datepicker.component.html'),
  styles: [require('./datepicker.component.css')],
})
export default class DatepickerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('input')
  private inputEl: ElementRef;
  private datepicker: Pikaday;

  @Input() format: string = 'DD/MM/YYYY';
  @Input() value: string;
  @Input() showOnInit: boolean = false;
  @Output() onChange = new EventEmitter<string>();

  ngAfterViewInit() {
    const input = this.inputEl.nativeElement;
    this.datepicker = new pikaday({
      field: input,
      format: this.format,
      onSelect: (date: Date) => {
        const formattedDate = moment(date).format(this.format);
        this.onChange.emit(formattedDate);
      },
    });

    if (this.showOnInit) this.datepicker.show();
  }

  ngOnDestroy() {
    this.datepicker.destroy();
  }
}