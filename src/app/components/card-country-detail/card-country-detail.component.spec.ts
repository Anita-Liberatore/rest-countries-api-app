import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCountryDetailComponent } from './card-country-detail.component';

describe('CardCountryDetailComponent', () => {
  let component: CardCountryDetailComponent;
  let fixture: ComponentFixture<CardCountryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCountryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCountryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
