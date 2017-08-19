import { RrrNycAppPage } from './app.po';

describe('rrr-nyc-app App', () => {
  let page: RrrNycAppPage;

  beforeEach(() => {
    page = new RrrNycAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
