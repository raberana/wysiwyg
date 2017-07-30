import { StockmarketPage } from './app.po';

describe('stockmarket App', () => {
  let page: StockmarketPage;

  beforeEach(() => {
    page = new StockmarketPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
