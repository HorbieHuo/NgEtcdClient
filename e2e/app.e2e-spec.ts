import { NgEtcdClientPage } from './app.po';

describe('ng-etcd-client App', () => {
  let page: NgEtcdClientPage;

  beforeEach(() => {
    page = new NgEtcdClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
