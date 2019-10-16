import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovacionncComponent } from './aprovacionnc.component';

describe('AprovacionncComponent', () => {
  let component: AprovacionncComponent;
  let fixture: ComponentFixture<AprovacionncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovacionncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovacionncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
