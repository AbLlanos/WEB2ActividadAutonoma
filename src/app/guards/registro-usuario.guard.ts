import { CanDeactivateFn } from '@angular/router';
import { RegistroUsuarioComponent } from '../component/usuario/registro-usuario/registro-usuario.component';

export const registroUsuarioGuard: CanDeactivateFn<RegistroUsuarioComponent> = (component, currentRoute, currentState, nextState) => {
  
  if (component.camposSinLlenar()) {
    return confirm("tienes datos sin llenar. ¿Seguro quieres abanadonar le registro?")
  } 
  
  return true;

  

};
