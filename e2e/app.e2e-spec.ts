import { ZwitterPage } from './app.po';

describe('zwitter App', () => {
  let page: ZwitterPage;

  beforeEach(() => {
    page = new ZwitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
