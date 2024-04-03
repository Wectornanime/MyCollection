import { TestBed } from '@angular/core/testing';

import { MobyGamesApiService } from './moby-games-api.service';

describe('MobyGamesApiService', () => {
  let service: MobyGamesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobyGamesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
