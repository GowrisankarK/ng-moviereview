import { TestBed } from '@angular/core/testing';

import { MovieReviewService } from './movie-review.service';

describe('MovieReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieReviewService = TestBed.get(MovieReviewService);
    expect(service).toBeTruthy();
  });
});
