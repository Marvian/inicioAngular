import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosNumeroCortoComponent } from './datos-numero-corto.component';

describe('DatosNumeroCortoComponent', () => {
  let component: DatosNumeroCortoComponent;
  let fixture: ComponentFixture<DatosNumeroCortoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosNumeroCortoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosNumeroCortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
