import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuscarHeladoComponent } from './form-buscar-helado.component';

describe('FormBuscarHeladoComponent', () => {
  let component: FormBuscarHeladoComponent;
  let fixture: ComponentFixture<FormBuscarHeladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuscarHeladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuscarHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
