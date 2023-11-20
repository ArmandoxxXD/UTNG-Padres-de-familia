import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBecasExternasComponent } from './ver-becas-externas.component';

describe('VerBecasExternasComponent', () => {
  let component: VerBecasExternasComponent;
  let fixture: ComponentFixture<VerBecasExternasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerBecasExternasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerBecasExternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
