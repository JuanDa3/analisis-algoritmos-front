import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameInterfaceComponent } from './components/game-interface/game-interface.component';
import { HeaderComponent } from './components/header/header.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdministratorComponent } from './components/administrator/administrator.component';



@NgModule({
  declarations: [
    AppComponent,
    GameInterfaceComponent,
    HeaderComponent,
    InstructionsComponent,
    QuizComponent,
    FooterComponent,
    AdministratorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
