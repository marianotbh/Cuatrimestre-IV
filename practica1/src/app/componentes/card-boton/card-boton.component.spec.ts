import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBotonComponent } from './card-boton.component';

describe('CardBotonComponent', () => {
  let component: CardBotonComponent;
  let fixture: ComponentFixture<CardBotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
