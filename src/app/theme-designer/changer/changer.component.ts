import { Component } from '@angular/core';

@Component({
	selector: 'app-changer',
	templateUrl: './changer.component.html',
	styleUrls: ['./changer.component.css']
})
export class ChangerComponent {
	public toChange: String[] = [
		'Background',
		'Foreground',
		'Button',
		'Border',
	];

	public redSlider: number = 0;
	public greenSlider: number = 0; 
	public blueSlider: number = 0;

}
