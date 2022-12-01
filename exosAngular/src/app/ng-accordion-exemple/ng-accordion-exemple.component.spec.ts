import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAccordionExempleComponent } from './ng-accordion-exemple.component';

describe('NgAccordionExempleComponent', () => {
  let component: NgAccordionExempleComponent;
  let fixture: ComponentFixture<NgAccordionExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAccordionExempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAccordionExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
