import { TestBed } from '@angular/core/testing';

import { HttpStudentsService } from './http-students.service';

describe('HttpStudentsService', () => {
  let service: HttpStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
