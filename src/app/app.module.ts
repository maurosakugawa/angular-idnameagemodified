import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import { FormComponent } from './form/form.component';
import { ServicoService } from './servico.service';
import { NumberOnlyDirective } from './numberonly.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    TabelaComponent, 
    FormComponent, 
    NumberOnlyDirective
  ],
  bootstrap:    [ AppComponent ],
  providers: [ServicoService]
})
export class AppModule { }
