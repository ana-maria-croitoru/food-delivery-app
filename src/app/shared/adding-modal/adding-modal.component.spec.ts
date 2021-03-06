import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddingModalComponent } from './adding-modal.component';

describe('AddingModalComponent', () => {
  let component: AddingModalComponent;
  let fixture: ComponentFixture<AddingModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
