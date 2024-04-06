import { TestBed } from '@angular/core/testing';

import { MyGameListService } from './my-game-list.service';

describe('MyGameListService', () => {
  let service: MyGameListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyGameListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
