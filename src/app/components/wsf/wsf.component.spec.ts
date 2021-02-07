import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsfComponent } from './wsf.component';

describe('StartFinishComponent', () => {
  let component: WsfComponent;
  let fixture: ComponentFixture<WsfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WsfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WsfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
