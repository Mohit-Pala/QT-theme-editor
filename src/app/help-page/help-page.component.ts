import { Component } from '@angular/core';

@Component({
	selector: 'app-help-page',
	templateUrl: './help-page.component.html',
	styleUrls: ['./help-page.component.css']
})
export class HelpPageComponent {
	public editorActive: boolean = true; 
	public bottomBarActive: boolean = true;
	public viewerActive: boolean = true;
	public loadActive: boolean = true;
	public installActive: boolean = true;

	public activateEditor(): void {
		this.editorActive = true;
		this.bottomBarActive = false;
		this.viewerActive = false;
		this.loadActive = false;
		this.installActive = false;
	}

	public activateBottom(): void {
		this.editorActive = false;
		this.bottomBarActive = true;
		this.viewerActive = false;
		this.loadActive = false;
		this.installActive = false;
	}

	public activateView(): void {
		this.editorActive = false;
		this.bottomBarActive = false;
		this.viewerActive = true;
		this.loadActive = false;
		this.installActive = false;
	}

	public activateLoad(): void {
		this.editorActive = false;
		this.bottomBarActive = false;
		this.viewerActive = false;
		this.loadActive = true;
		this.installActive = false;
	}

	public activateInstall(): void {
		this.editorActive = false;
		this.bottomBarActive = false;
		this.viewerActive = false;
		this.loadActive = false;
		this.installActive = true;
	}

	public reset(): void {
		this.editorActive = true;
		this.bottomBarActive = true;
		this.viewerActive = true;
		this.loadActive = true;
		this.installActive = true;
	}
}


