import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAboutComponent } from './principal-about.component';

describe('PrincipalAboutComponent', () => {
  let component: PrincipalAboutComponent;
  let fixture: ComponentFixture<PrincipalAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
