import { RoutingAngular2CLIPage } from './app.po';

describe('routing-angular2-cli App', () => {
  let page: RoutingAngular2CLIPage;

  beforeEach(() => {
    page = new RoutingAngular2CLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
