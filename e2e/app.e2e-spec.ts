import { LightitPage } from './app.po';

describe('lightit App', () => {
  let page: LightitPage;

  beforeEach(() => {
    page = new LightitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
