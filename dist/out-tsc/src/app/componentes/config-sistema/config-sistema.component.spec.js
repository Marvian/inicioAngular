import { async, TestBed } from '@angular/core/testing';
import { ConfigSistemaComponent } from './config-sistema.component';
describe('ConfigSistemaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ConfigSistemaComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ConfigSistemaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=config-sistema.component.spec.js.map