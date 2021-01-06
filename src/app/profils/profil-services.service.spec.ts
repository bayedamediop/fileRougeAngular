import { TestBed } from '@angular/core/testing';

import { ProfilServicesService } from './profil-services.service';

describe('ProfilServicesService', () => {
  let service: ProfilServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
