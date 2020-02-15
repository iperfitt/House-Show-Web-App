import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllisonComponent } from './allison.component';

describe('AllisonComponent', () => {
  let component: AllisonComponent;
  let fixture: ComponentFixture<AllisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
