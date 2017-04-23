import { Dog2showNgExhibitorPage } from './app.po';

describe('dog2show-ng-exhibitor App', () => {
  let page: Dog2showNgExhibitorPage;

  beforeEach(() => {
    page = new Dog2showNgExhibitorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('my works!');
  });
});
