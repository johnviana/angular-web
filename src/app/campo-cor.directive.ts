import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoCor]'
})
export class CampoCorDirective {

  @HostBinding('style.backgroundColor') corDeFundo: String = 'transparent'


  @HostListener('focus') aoGanharFoco(){
   this.corDeFundo = '#D3D3D3'
   }

   @HostListener('blur') aoPerderFoco(){
    this.corDeFundo = 'transparent'


   }


}
