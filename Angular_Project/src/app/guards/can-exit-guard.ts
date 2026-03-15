import { CanDeactivateFn } from '@angular/router';

export const canExitGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {

  if(component.hasChanges){
    alert('save chesi poo!!')
    return false;
  }else{            
  return true;
  }
};
