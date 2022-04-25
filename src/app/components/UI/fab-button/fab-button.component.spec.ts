import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabButtonComponent } from './fab-button.component';

describe('IconButtonComponent', () => {
  let component: FabButtonComponent;
  let fixture: ComponentFixture<FabButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});