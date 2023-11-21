import { Component } from '@angular/core';

@Component({
	selector: 'app-changer',
	templateUrl: './changer.component.html',
	styleUrls: ['./changer.component.css']
})
export class ChangerComponent {
	public toChange: {name: String, id: number}[] = [
		{'name': 'Background', 'id': 0},
		{'name': 'Foreground', 'id': 1},
		{'name': 'Button', 'id': 2},
		{'name': 'Border', 'id': 3},
	];

	public redSlider: number = 0;
	public greenSlider: number = 0; 
	public blueSlider: number = 0;

	parseId(id: number){
		if(id === 0) {
			
		}

		else if(id === 1) {
			
		}

		else if(id === 2) {
			
		}

		else if(id === 3) {
			
		}
	}
}
