import { AppRoutingModule } from './../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { SharedModule } from '../shared/shared.module';
import { ValidacaoCaixaPesquisaComponent } from './validacao/validacao-caixa-pesquisa.component';
import { TabMenuModule } from 'primeng/tabmenu';



@NgModule({
  declarations: [ValidacaoCaixaPesquisaComponent],

  exports: [
      ValidacaoCaixaPesquisaComponent

    ],

  imports: [
    CommonModule,
        BrowserModule,
        TabMenuModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        FormsModule,
        TabViewModule,
        TooltipModule,
        InputTextareaModule,
        SelectButtonModule,
        CalendarModule,
        DropdownModule,
        InputNumberModule,
        InputMaskModule,
        MessagesModule,
        MessageModule,
        SharedModule,


  ]
})
export class ValidacaoModule { }
