import { async, TestBed } from '@angular/core/testing';
import { DatosEmpleadoComponent } from './datos-empleado.component';
describe('DatosEmpleadoComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DatosEmpleadoComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DatosEmpleadoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=datos-empleado.component.spec.js.map