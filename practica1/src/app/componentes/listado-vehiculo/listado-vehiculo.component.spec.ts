import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVehiculoComponent } from './listado-vehiculo.component';

describe('ListadoVehiculoComponent', () => {
  let component: ListadoVehiculoComponent;
  let fixture: ComponentFixture<ListadoVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
