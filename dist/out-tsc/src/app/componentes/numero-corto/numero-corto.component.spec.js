import { async, TestBed } from '@angular/core/testing';
import { NumeroCortoComponent } from './numero-corto.component';
describe('NumeroCortoComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NumeroCortoComponent]
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
//# sourceMappingURL=numero-corto.component.spec.js.map