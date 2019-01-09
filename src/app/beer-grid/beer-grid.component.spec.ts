import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerGridComponent } from './beer-grid.component';

describe('BeerGridComponent', () => {
  let component: BeerGridComponent;
  let fixture: ComponentFixture<BeerGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
