import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModelComponent } from './card-model.component';

describe('CardModelComponent', () => {
  let component: CardModelComponent;
  let fixture: ComponentFixture<CardModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardModelComponent]
    });
    fixture = TestBed.createComponent(CardModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
