import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerComponent } from './changer.component';

describe('ChangerComponent', () => {
  let component: ChangerComponent;
  let fixture: ComponentFixture<ChangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangerComponent]
    });
    fixture = TestBed.createComponent(ChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
