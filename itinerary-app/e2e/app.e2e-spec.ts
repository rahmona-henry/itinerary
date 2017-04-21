import { ItineraryAppPage } from './app.po';

describe('itinerary-app App', () => {
  let page: ItineraryAppPage;

  beforeEach(() => {
    page = new ItineraryAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
