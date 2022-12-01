import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgProgressExempleComponent } from './ng-progress-exemple.component';

describe('NgProgressExempleComponent', () => {
  let component: NgProgressExempleComponent;
  let fixture: ComponentFixture<NgProgressExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgProgressExempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgProgressExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
