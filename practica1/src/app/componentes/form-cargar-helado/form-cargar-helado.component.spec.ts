import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCargarHeladoComponent } from './form-cargar-helado.component';

describe('FormCargarHeladoComponent', () => {
  let component: FormCargarHeladoComponent;
  let fixture: ComponentFixture<FormCargarHeladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCargarHeladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCargarHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
