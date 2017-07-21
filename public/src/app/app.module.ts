import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './user.service'
import { QuestionService } from './question.service'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsCreateComponent } from './questions/questions-create/questions-create.component';
import { QuestionsShowComponent } from './questions/questions-show/questions-show.component';
import { QuestionsAnswerComponent } from './questions/questions-answer/questions-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    QuestionsComponent,
    QuestionsCreateComponent,
    QuestionsShowComponent,
    QuestionsAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
