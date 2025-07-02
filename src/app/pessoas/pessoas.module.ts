import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaComponent } from './pessoa/pessoa.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputMaskModule } from 'primeng/inputmask';
import { SharedModule } from 'primeng/api';



@NgModule({
  declarations: [PessoaComponent],

  exports: [
      PessoaComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    InputMaskModule,

    SharedModule
  ]

})
export class PessoasModule { }
