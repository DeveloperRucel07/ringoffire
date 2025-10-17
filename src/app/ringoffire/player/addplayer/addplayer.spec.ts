import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addplayer } from './addplayer';

describe('Addplayer', () => {
  let component: Addplayer;
  let fixture: ComponentFixture<Addplayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addplayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addplayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
