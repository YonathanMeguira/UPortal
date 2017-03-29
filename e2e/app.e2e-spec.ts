import { UserPortal2Page } from './app.po';

describe('user-portal2 App', () => {
  let page: UserPortal2Page;

  beforeEach(() => {
    page = new UserPortal2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
