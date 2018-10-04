import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeladoComponent } from './card-helado.component';

describe('CardHeladoComponent', () => {
  let component: CardHeladoComponent;
  let fixture: ComponentFixture<CardHeladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHeladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
