import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ringoffire } from './ringoffire';

describe('Ringoffire', () => {
  let component: Ringoffire;
  let fixture: ComponentFixture<Ringoffire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ringoffire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ringoffire);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
