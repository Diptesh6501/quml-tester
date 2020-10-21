import { Component, AfterViewInit } from '@angular/core';
import { questionSet , questionSetSa } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'tester';
  questionSets = questionSet.stage[0]['org.ekstep.questionset'][0]['org.ekstep.question'];
  telemtryObj = {
  id: '1234',
  profileId: '1234',
  stallId: '1234',
  ideaId: '1234',
  sid: '1234',
  type: 'class',
  profileUrl: 'http',
  name: 'diptesh' };
  // questionSetShortAnswer = questionSetSa.result.assessment_item.editorState;
  // questionSetShortAnswer = questionSetSa.stage['org.ekstep.questionset']['org.ekstep.question'];

  ngAfterViewInit() {
    // json.theme.stage[0].org.ekstep.questionset[0].org.ekstep.question
    // console.log('question sets' , questionSet.stage[0]['org.ekstep.questionset'][0]['org.ekstep.question']);
    // console.log('question  set length' , this.questionSets.length);

  }
}
