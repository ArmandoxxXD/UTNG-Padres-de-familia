import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBecasInternasComponent } from './ver-becas-internas.component';

describe('VerBecasInternasComponent', () => {
  let component: VerBecasInternasComponent;
  let fixture: ComponentFixture<VerBecasInternasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerBecasInternasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerBecasInternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
