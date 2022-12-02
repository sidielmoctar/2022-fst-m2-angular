import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormExempleComponent } from './reactive-form-exemple.component';

describe('ReactiveFormExempleComponent', () => {
  let component: ReactiveFormExempleComponent;
  let fixture: ComponentFixture<ReactiveFormExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormExempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
