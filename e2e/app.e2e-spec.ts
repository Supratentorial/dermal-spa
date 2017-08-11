import { DermalSpaPage } from './app.po';

describe('dermal-spa App', () => {
  let page: DermalSpaPage;

  beforeEach(() => {
    page = new DermalSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
