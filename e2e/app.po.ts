import { browser, element, by } from 'protractor';

export class QuestionnairePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ques-root h1')).getText();
  }
}
