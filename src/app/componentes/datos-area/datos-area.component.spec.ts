import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAreaComponent } from './datos-area.component';

describe('DatosAreaComponent', () => {
  let component: DatosAreaComponent;
  let fixture: ComponentFixture<DatosAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
