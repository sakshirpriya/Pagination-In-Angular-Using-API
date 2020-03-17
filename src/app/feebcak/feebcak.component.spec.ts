import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeebcakComponent } from './feebcak.component';

describe('FeebcakComponent', () => {
  let component: FeebcakComponent;
  let fixture: ComponentFixture<FeebcakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeebcakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeebcakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
