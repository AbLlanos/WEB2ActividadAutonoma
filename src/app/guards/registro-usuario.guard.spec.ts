import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { registroUsuarioGuard } from './registro-usuario.guard';
import { RegistroUsuarioComponent } from '../component/usuario/registro-usuario/registro-usuario.component';

describe('registroUsuarioGuard', () => {
  const executeGuard: CanDeactivateFn<RegistroUsuarioComponent> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => registroUsuarioGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
