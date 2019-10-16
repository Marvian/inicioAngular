import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroCortoComponent } from './numero-corto.component';

describe('NumeroCortoComponent', () => {
  let component: NumeroCortoComponent;
  let fixture: ComponentFixture<NumeroCortoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroCortoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroCortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
