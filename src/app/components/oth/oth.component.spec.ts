import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthComponent } from './oth.component';

describe('OthComponent', () => {
  let component: OthComponent;
  let fixture: ComponentFixture<OthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
