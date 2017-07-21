import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsCreateComponent } from './questions/questions-create/questions-create.component';
import { QuestionsShowComponent } from './questions/questions-show/questions-show.component';
import { QuestionsAnswerComponent } from './questions/questions-answer/questions-answer.component';

const routes: Routes = [
  { path: 'index', component: LandingComponent },
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: 'main', component: QuestionsComponent },
  { path: 'new_question', component: QuestionsCreateComponent },
  { path: 'question/:question_id', component: QuestionsShowComponent },
  { path: 'question/:question_id/new_answer', component: QuestionsAnswerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
