import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCambioTarifaComponent } from './form-cambio-tarifa.component';

describe('FormCambioTarifaComponent', () => {
  let component: FormCambioTarifaComponent;
  let fixture: ComponentFixture<FormCambioTarifaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCambioTarifaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCambioTarifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
