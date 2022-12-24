import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalTecnologiesComponent } from './principal-tecnologies.component';

describe('PrincipalTecnologiesComponent', () => {
  let component: PrincipalTecnologiesComponent;
  let fixture: ComponentFixture<PrincipalTecnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalTecnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalTecnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
