import { TestBed, inject } from '@angular/core/testing';

import { EtcdService } from './etcd.service';

describe('EtcdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtcdService]
    });
  });

  it('should be created', inject([EtcdService], (service: EtcdService) => {
    expect(service).toBeTruthy();
  }));
});
