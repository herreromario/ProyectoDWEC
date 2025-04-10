import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuberiasComponent } from './tuberias.component';

describe('TuberiasComponent', () => {
  let component: TuberiasComponent;
  let fixture: ComponentFixture<TuberiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TuberiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuberiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
