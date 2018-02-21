import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaRedondaComponent } from './mesa-redonda.component';

describe('MesaRedondaComponent', () => {
  let component: MesaRedondaComponent;
  let fixture: ComponentFixture<MesaRedondaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaRedondaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaRedondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
