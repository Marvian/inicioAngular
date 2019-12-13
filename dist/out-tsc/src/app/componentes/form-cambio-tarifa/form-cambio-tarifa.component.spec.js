import { async, TestBed } from '@angular/core/testing';
import { FormCambioTarifaComponent } from './form-cambio-tarifa.component';
describe('FormCambioTarifaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormCambioTarifaComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FormCambioTarifaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=form-cambio-tarifa.component.spec.js.map