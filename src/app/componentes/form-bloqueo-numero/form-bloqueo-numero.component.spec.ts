import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBloqueoNumeroComponent } from './form-bloqueo-numero.component';

describe('FormBloqueoNumeroComponent', () => {
  let component: FormBloqueoNumeroComponent;
  let fixture: ComponentFixture<FormBloqueoNumeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBloqueoNumeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBloqueoNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
