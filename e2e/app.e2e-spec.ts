import { Fw7ExPage } from './app.po';

describe('fw7-ex App', function() {
  let page: Fw7ExPage;

  beforeEach(() => {
    page = new Fw7ExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
