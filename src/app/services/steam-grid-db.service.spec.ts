import { TestBed } from '@angular/core/testing';

import { SteamGridDbService } from './steam-grid-db.service';

describe('SteamGridDbService', () => {
  let service: SteamGridDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteamGridDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
