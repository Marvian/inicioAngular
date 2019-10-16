import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCierreNumeroComponent } from './form-cierre-numero.component';

describe('FormCierreNumeroComponent', () => {
  let component: FormCierreNumeroComponent;
  let fixture: ComponentFixture<FormCierreNumeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCierreNumeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCierreNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
