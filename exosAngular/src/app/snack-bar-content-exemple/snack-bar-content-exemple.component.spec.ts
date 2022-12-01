import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarContentExempleComponent } from './snack-bar-content-exemple.component';

describe('SnackBarContentExempleComponent', () => {
  let component: SnackBarContentExempleComponent;
  let fixture: ComponentFixture<SnackBarContentExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarContentExempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarContentExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
