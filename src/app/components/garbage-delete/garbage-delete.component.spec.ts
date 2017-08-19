import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageDeleteComponent } from './garbage-delete.component';

describe('GarbageDeleteComponent', () => {
  let component: GarbageDeleteComponent;
  let fixture: ComponentFixture<GarbageDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarbageDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarbageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
