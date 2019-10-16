import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevoNumeroComponent } from './form-nuevo-numero.component';

describe('FormNuevoNumeroComponent', () => {
  let component: FormNuevoNumeroComponent;
  let fixture: ComponentFixture<FormNuevoNumeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNuevoNumeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevoNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
