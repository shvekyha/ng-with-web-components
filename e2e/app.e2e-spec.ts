import { NgWithWebComponentsPage } from './app.po';

describe('ng-with-web-components App', () => {
  let page: NgWithWebComponentsPage;

  beforeEach(() => {
    page = new NgWithWebComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
