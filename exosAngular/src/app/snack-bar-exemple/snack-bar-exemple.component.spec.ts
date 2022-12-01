import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarExempleComponent } from './snack-bar-exemple.component';

describe('SnackBarExempleComponent', () => {
  let component: SnackBarExempleComponent;
  let fixture: ComponentFixture<SnackBarExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarExempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
