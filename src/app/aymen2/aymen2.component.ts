import { Component,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-aymen2',
  templateUrl: './aymen2.component.html',
  styleUrl: './aymen2.component.css'
})
export class Aymen2Component {
  @Input()
  message: any = {};
  @Input()
  index: number = -1;
  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();
  onDelete() {
    this.delete.emit(this.index);
  }

}
