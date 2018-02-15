import { TestBed, inject } from '@angular/core/testing';

import { SoundcampService } from './soundcamp.service';

describe('SoundcampService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoundcampService]
    });
  });

  it('should be created', inject([SoundcampService], (service: SoundcampService) => {
    expect(service).toBeTruthy();
  }));
});
