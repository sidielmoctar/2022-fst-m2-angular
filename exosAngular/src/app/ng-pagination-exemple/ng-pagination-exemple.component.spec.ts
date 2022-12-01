import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPaginationExempleComponent } from './ng-pagination-exemple.component';

describe('NgPaginationExempleComponent', () => {
  let component: NgPaginationExempleComponent;
  let fixture: ComponentFixture<NgPaginationExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPaginationExempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgPaginationExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
