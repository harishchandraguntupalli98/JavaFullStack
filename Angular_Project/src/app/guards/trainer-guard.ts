import { CanActivateFn } from '@angular/router';

export const trainerGuard: CanActivateFn = (route, state) => {
  // let userType = sessionStorage.getItem('userType')
  const userRole = 'trainer';
  // if (userRole === 'trainer') {
  if (false) {
    return true;
  } else {
    alert('Porareyyy!!!')
    return false;
  }
};
