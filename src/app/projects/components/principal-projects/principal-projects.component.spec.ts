import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalProjectsComponent } from './principal-projects.component';

describe('PrincipalProjectsComponent', () => {
  let component: PrincipalProjectsComponent;
  let fixture: ComponentFixture<PrincipalProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
