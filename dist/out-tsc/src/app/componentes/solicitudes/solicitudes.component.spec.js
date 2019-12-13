import { async, TestBed } from '@angular/core/testing';
import { SolicitudesComponent } from './solicitudes.component';
describe('SolicitudesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SolicitudesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SolicitudesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=solicitudes.component.spec.js.map