import { async, TestBed } from '@angular/core/testing';
import { AprovacionncComponent } from './aprovacionnc.component';
describe('AprovacionncComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AprovacionncComponent]
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
//# sourceMappingURL=aprovacionnc.component.spec.js.map