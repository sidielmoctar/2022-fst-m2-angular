import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTimePickerExempleComponent } from './ng-time-picker-exemple.component';

describe('NgTimePickerExempleComponent', () => {
  let component: NgTimePickerExempleComponent;
  let fixture: ComponentFixture<NgTimePickerExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTimePickerExempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTimePickerExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
