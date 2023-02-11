import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HltComponent } from './hlt.component';

describe('HltComponent', () => {
  let component: HltComponent;
  let fixture: ComponentFixture<HltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
