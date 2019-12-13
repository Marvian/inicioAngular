import { TestBed } from '@angular/core/testing';
import { EmpleadoService } from './empleado.service';
describe('EmpleadoService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(EmpleadoService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=empleado.service.spec.js.map