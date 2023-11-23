import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLoadComponent } from './theme-load.component';

describe('ThemeLoadComponent', () => {
  let component: ThemeLoadComponent;
  let fixture: ComponentFixture<ThemeLoadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeLoadComponent]
    });
    fixture = TestBed.createComponent(ThemeLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
