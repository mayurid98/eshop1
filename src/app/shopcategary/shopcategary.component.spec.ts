import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcategaryComponent } from './shopcategary.component';

describe('ShopcategaryComponent', () => {
  let component: ShopcategaryComponent;
  let fixture: ComponentFixture<ShopcategaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopcategaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopcategaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
