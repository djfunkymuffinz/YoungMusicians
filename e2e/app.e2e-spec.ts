import { YoungMusiciansPage } from './app.po';

describe('young-musicians App', () => {
  let page: YoungMusiciansPage;

  beforeEach(() => {
    page = new YoungMusiciansPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
