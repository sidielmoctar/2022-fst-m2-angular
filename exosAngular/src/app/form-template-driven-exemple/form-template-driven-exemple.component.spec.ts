import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateDrivenExempleComponent } from './form-template-driven-exemple.component';

describe('FormTemplateDrivenExempleComponent', () => {
  let component: FormTemplateDrivenExempleComponent;
  let fixture: ComponentFixture<FormTemplateDrivenExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTemplateDrivenExempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTemplateDrivenExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
