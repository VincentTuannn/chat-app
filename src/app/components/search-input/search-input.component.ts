import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  @Output() search: EventEmitter<string> = new EventEmitter();

handleSearch($event: any) {
    this.search.emit($event.target.value);
}

}
