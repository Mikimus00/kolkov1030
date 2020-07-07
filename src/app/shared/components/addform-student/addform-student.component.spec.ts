import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformStudentComponent } from './addform-student.component';

describe('AddformStudentComponent', () => {
  let component: AddformStudentComponent;
  let fixture: ComponentFixture<AddformStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddformStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
