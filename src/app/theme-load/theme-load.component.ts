import { Component, OnInit } from '@angular/core';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';


@Component({
	selector: 'app-theme-load',
	templateUrl: './theme-load.component.html',
	styleUrls: ['./theme-load.component.css']
})

export class ThemeLoadComponent implements OnInit {
	ngOnInit(): void {

		let myItem = localStorage.getItem(this.key);

		if (myItem === null) {
			localStorage.setItem(this.key, JSON.stringify(this.themesArray));
		}

		else {
			this.themesArray = JSON.parse(myItem);
		}
	}

	public key = 'themeDesigner';


	public backR: number = 30;
	public backG: number = 30;
	public backB: number = 46;

	public foreR: number = 205;
	public foreG: number = 214;
	public foreB: number = 244;

	public buttonR: number = 49;
	public buttonG: number = 50;
	public buttonB: number = 68;

	public borderR: number = 242;
	public borderG: number = 205;
	public borderB: number = 205;

	public makeRGB(redColor: number, greenColor: number, blueColor: number): String {
		return 'rgb(' + redColor + ',' + greenColor + ',' + blueColor + ')';
	}

	public backColor: String = this.makeRGB(this.backR, this.backG, this.backB);
	public foreColor: String = this.makeRGB(this.foreR, this.foreG, this.foreB);
	public buttonColor: String = this.makeRGB(this.buttonR, this.buttonG, this.buttonB);
	public borderColor: String = this.makeRGB(this.borderR, this.borderG, this.borderB);

	public themeName: String = 'Red-Yellow theme';

	public savingTheme: boolean = false;

	public themesArray: {
		name: String,
		background: String,
		foreground: String,
		button: String,
		border: String,

		backRed: number,
		backGreen: number,
		backBlue: number,

		foreRed: number,
		foreGreen: number,
		foreBlue: number,

		buttonRed: number,
		buttonGreen: number,
		buttonBlue: number,

		borderRed: number,
		borderGreen: number,
		borderBlue: number,
	}[] = [

		]

	public toChange: { name: String, id: number }[] = [
		{ 'name': 'Background', 'id': 0 },
		{ 'name': 'Foreground', 'id': 1 },
		{ 'name': 'Button', 'id': 2 },
		{ 'name': 'Border', 'id': 3 },
	];

	public redSlider: number = 0;
	public greenSlider: number = 0;
	public blueSlider: number = 0;
	public currentlyEditing: number = 10;

	parseId(id: number) {
		if (id === 0) {
			this.currentlyEditing = 0;
			this.redSlider = this.backR;
			this.greenSlider = this.backG;
			this.blueSlider = this.backB;
		}
		else if (id === 1) {
			this.currentlyEditing = 1;
			this.redSlider = this.foreR;
			this.greenSlider = this.foreG;
			this.blueSlider = this.foreB;
		}
		else if (id === 2) {
			this.currentlyEditing = 2;
			this.redSlider = this.buttonR;
			this.greenSlider = this.buttonG;
			this.blueSlider = this.buttonB;
		}
		else if (id === 3) {
			this.currentlyEditing = 3;
			this.redSlider = this.borderR;
			this.greenSlider = this.borderG;
			this.blueSlider = this.borderB;
		}
		else {
			this.currentlyEditing = 10;
		}
		console.log(this.currentlyEditing);
	}

	public updateRed(): void {
		if (this.currentlyEditing === 0) {
			this.backR = this.redSlider;
			this.backColor = this.makeRGB(this.backR, this.backG, this.backB);
		}
		else if (this.currentlyEditing === 1) {
			this.foreR = this.redSlider;
			this.foreColor = this.makeRGB(this.foreR, this.foreG, this.foreB);
		}
		else if (this.currentlyEditing === 2) {
			this.buttonR = this.redSlider;
			this.buttonColor = this.makeRGB(this.buttonR, this.buttonG, this.buttonB);
		}
		else if (this.currentlyEditing === 3) {
			this.borderR = this.redSlider;
			this.borderColor = this.makeRGB(this.borderR, this.borderG, this.borderB);
		}
	}

	public updateGreen(): void {
		if (this.currentlyEditing === 0) {
			this.backG = this.greenSlider;
			this.backColor = this.makeRGB(this.backR, this.backG, this.backB);
		}
		else if (this.currentlyEditing === 1) {
			this.foreG = this.greenSlider;
			this.foreColor = this.makeRGB(this.foreR, this.foreG, this.foreB);
		}
		else if (this.currentlyEditing === 2) {
			this.buttonG = this.greenSlider;
			this.buttonColor = this.makeRGB(this.buttonR, this.buttonG, this.buttonB);
		}
		else if (this.currentlyEditing === 3) {
			this.borderG = this.greenSlider;
			this.borderColor = this.makeRGB(this.borderR, this.borderG, this.borderB);
		}
	}

	public updateBlue(): void {
		if (this.currentlyEditing === 0) {
			this.backB = this.blueSlider;
			this.backColor = this.makeRGB(this.backR, this.backG, this.backB);
		}
		else if (this.currentlyEditing === 1) {
			this.foreB = this.blueSlider;
			this.foreColor = this.makeRGB(this.foreR, this.foreG, this.foreB);
		}
		else if (this.currentlyEditing === 2) {
			this.buttonB = this.blueSlider;
			this.buttonColor = this.makeRGB(this.buttonR, this.buttonG, this.buttonB);
		}
		else if (this.currentlyEditing === 3) {
			this.borderB = this.blueSlider;
			this.borderColor = this.makeRGB(this.borderR, this.borderG, this.borderB);
		}
	}

	public resetTo0(): void {
		this.backR = 255;
		this.backG = 255;
		this.backB = 255;
		this.foreR = 0;
		this.foreG = 0;
		this.foreB = 0;
		this.buttonR = 255;
		this.buttonG = 255;
		this.buttonB = 255;
		this.borderR = 255;
		this.borderG = 255;
		this.borderB = 255;
		this.backColor = this.makeRGB(this.backR, this.backG, this.backB);
		this.foreColor = this.makeRGB(this.foreR, this.foreG, this.foreB);
		this.buttonColor = this.makeRGB(this.buttonR, this.buttonG, this.buttonB);
		this.borderColor = this.makeRGB(this.borderR, this.borderG, this.borderB);
	}

	public showSave(): void {
		this.savingTheme = true;
	}

	public addToArray(): void {
		this.themesArray.push(
			{
				'name': this.themeName,
				'background': this.backColor,
				'foreground': this.foreColor,
				'button': this.buttonColor,
				'border': this.borderColor,
				'backRed': this.backR,
				'backGreen': this.backG,
				'backBlue': this.backB,
				'foreRed': this.foreR,
				'foreGreen': this.foreG,
				'foreBlue': this.foreB,
				'buttonRed': this.buttonR,
				'buttonGreen': this.buttonG,
				'buttonBlue': this.buttonB,
				'borderRed': this.borderR,
				'borderGreen': this.borderG,
				'borderBlue': this.borderB,
			}
		);

		localStorage.setItem(this.key, JSON.stringify(this.themesArray));
	}

	public saveTheme(): void {
		this.addToArray();
		this.savingTheme = false;
		this.themeName = 'Red-Yellow Theme';
	}

	public downloadTheme(): void {
		
	}

	public loadTheme(
		backRed: number,
		backGreen: number,
		backBlue: number,

		foreRed: number,
		foreGreen: number,
		foreBlue: number,

		buttonRed: number,
		buttonGreen: number,
		buttonBlue: number,

		borderRed: number,
		borderGreen: number,
		borderBlue: number,

		backColor: String,
		foreColor: String,
		buttonColor: String,
		borderColor: String
	): void {

		this.backR = backRed;
		this.backG = backBlue;
		this.backB = backGreen;

		this.foreR = foreRed;
		this.foreG = foreGreen;
		this.foreB = foreBlue;

		this.buttonR = buttonRed;
		this.buttonG = buttonGreen;
		this.buttonB = buttonBlue;

		this.borderR = borderRed;
		this.borderG = borderGreen;
		this.borderB = borderBlue;

		this.updateRed();
		this.updateGreen();
		this.updateBlue();

		this.backColor = backColor;
		this.buttonColor = buttonColor;
		this.borderColor = borderColor;
		this.foreColor = foreColor;
	}
}