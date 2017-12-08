import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTimelineComponent } from './usuario-timeline.component';

describe('UsuarioTimelineComponent', () => {
  let component: UsuarioTimelineComponent;
  let fixture: ComponentFixture<UsuarioTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
