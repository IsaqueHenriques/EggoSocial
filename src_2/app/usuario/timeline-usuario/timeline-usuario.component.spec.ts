import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineUsuarioComponent } from './timeline-usuario.component';

describe('TimelineUsuarioComponent', () => {
  let component: TimelineUsuarioComponent;
  let fixture: ComponentFixture<TimelineUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
