import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageEditComponent } from './garbage-edit.component';

describe('GarbageEditComponent', () => {
  let component: GarbageEditComponent;
  let fixture: ComponentFixture<GarbageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarbageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarbageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
