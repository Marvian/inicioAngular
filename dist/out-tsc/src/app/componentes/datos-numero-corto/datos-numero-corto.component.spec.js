import { async, TestBed } from '@angular/core/testing';
import { DatosNumeroCortoComponent } from './datos-numero-corto.component';
describe('DatosNumeroCortoComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DatosNumeroCortoComponent]
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
//# sourceMappingURL=datos-numero-corto.component.spec.js.map