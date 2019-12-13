import { async, TestBed } from '@angular/core/testing';
import { FormCierreNumeroComponent } from './form-cierre-numero.component';
describe('FormCierreNumeroComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormCierreNumeroComponent]
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
//# sourceMappingURL=form-cierre-numero.component.spec.js.map