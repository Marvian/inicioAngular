import { async, TestBed } from '@angular/core/testing';
import { FormBloqueoNumeroComponent } from './form-bloqueo-numero.component';
describe('FormBloqueoNumeroComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormBloqueoNumeroComponent]
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
//# sourceMappingURL=form-bloqueo-numero.component.spec.js.map