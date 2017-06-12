import { RunJournalPage } from './app.po';

describe('run-journal App', () => {
  let page: RunJournalPage;

  beforeEach(() => {
    page = new RunJournalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
