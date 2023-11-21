import { Component } from '@angular/core';

@Component({
	selector: 'app-bottom-bar',
	templateUrl: './bottom-bar.component.html',
	styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent {
	public reset(): void {
		// reset values to 0
	}

	public download(): void {
		// zip up and download files
	}

	public save(): void {
		// save to local storage
	}
}
