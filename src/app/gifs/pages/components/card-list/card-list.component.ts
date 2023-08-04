import { Component, Input } from '@angular/core';

// INTERFACES
import { Gif } from 'src/app/gifs/interfaces/gifs';

@Component({
	selector: 'gifs-card-list',
	templateUrl: './card-list.component.html',
})
export class CardListComponent {

	@Input()
	public gifs: Gif[] = [];

}
