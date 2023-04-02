import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoncvComponent } from './buttoncv.component';

describe('ButtoncvComponent', () => {
  let component: ButtoncvComponent;
  let fixture: ComponentFixture<ButtoncvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtoncvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtoncvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
