/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventManagementService } from './event-management.service';

describe('Service: EventManagement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventManagementService]
    });
  });

  it('should ...', inject([EventManagementService], (service: EventManagementService) => {
    expect(service).toBeTruthy();
  }));
});
