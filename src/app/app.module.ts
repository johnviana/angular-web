import { LancamentoService } from './lancamentos/lancamento.service';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {InputTextModule} from 'primeng/inputtext';

import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table'
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { CampoCorDirective } from './campo-cor.directive';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './core/navbar/navbar.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { PessoaComponent } from './pessoas/pessoa/pessoa.component';
import { HttpClientModule } from '@angular/common/http';
import { PessoasModule } from './pessoas/pessoas.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    CampoCorDirective,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,

    LancamentosModule,
    PessoasModule,
    CoreModule,

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
    HttpClientModule

  ],
  providers: [LancamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
