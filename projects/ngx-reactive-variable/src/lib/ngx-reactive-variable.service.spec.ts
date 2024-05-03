import { TestBed } from '@angular/core/testing';

import { NgxReactiveVariableService } from './ngx-reactive-variable.service';

describe('NgxReactiveVariableService', () => {
  let service: NgxReactiveVariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxReactiveVariableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
