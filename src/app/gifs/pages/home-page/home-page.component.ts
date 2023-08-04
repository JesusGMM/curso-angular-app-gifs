import { Component } from '@angular/core';

// SERVICES
import { GifsService } from '../../services/gifs.service';

// INTERFACES
import { Gif } from '../../interfaces/gifs';

@Component({
	selector: 'gifs-home',
	templateUrl: './home-page.component.html'
})
export class HomePageComponent {

	constructor(private gifsService: GifsService) { }

	get gifs(): Gif[] {
		return this.gifsService.gifList;
	}

}
