import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTraspasoNumeroComponent } from './form-traspaso-numero.component';

describe('FormTraspasoNumeroComponent', () => {
  let component: FormTraspasoNumeroComponent;
  let fixture: ComponentFixture<FormTraspasoNumeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTraspasoNumeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTraspasoNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
