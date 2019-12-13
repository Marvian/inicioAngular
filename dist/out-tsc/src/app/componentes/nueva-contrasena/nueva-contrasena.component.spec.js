import { async, TestBed } from '@angular/core/testing';
import { NuevaContrasenaComponent } from './nueva-contrasena.component';
describe('NuevaContrasenaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NuevaContrasenaComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(NuevaContrasenaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nueva-contrasena.component.spec.js.map