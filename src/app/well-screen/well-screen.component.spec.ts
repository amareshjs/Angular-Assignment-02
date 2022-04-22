import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellScreenComponent } from './well-screen.component';

describe('WellScreenComponent', () => {
  let component: WellScreenComponent;
  let fixture: ComponentFixture<WellScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
