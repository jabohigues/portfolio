import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalHabilitiesComponent } from './principal-habilities.component';

describe('PrincipalHabilitiesComponent', () => {
  let component: PrincipalHabilitiesComponent;
  let fixture: ComponentFixture<PrincipalHabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalHabilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalHabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
