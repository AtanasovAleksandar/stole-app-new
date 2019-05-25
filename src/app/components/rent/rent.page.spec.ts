import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentPage } from './rent.page';

describe('RentPage', () => {
  let component: RentPage;
  let fixture: ComponentFixture<RentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
