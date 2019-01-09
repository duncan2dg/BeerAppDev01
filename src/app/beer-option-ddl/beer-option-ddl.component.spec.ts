import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerOptionDdlComponent } from './beer-option-ddl.component';

describe('BeerOptionDdlComponent', () => {
  let component: BeerOptionDdlComponent;
  let fixture: ComponentFixture<BeerOptionDdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerOptionDdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerOptionDdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
