import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalContactComponent } from './principal-contact.component';

describe('PrincipalContactComponent', () => {
  let component: PrincipalContactComponent;
  let fixture: ComponentFixture<PrincipalContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
