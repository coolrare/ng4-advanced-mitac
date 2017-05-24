import { Ng4AdvancedMitacPage } from './app.po';

describe('ng4-advanced-mitac App', () => {
  let page: Ng4AdvancedMitacPage;

  beforeEach(() => {
    page = new Ng4AdvancedMitacPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
