import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightItemComponent } from './sight-item.component';

describe('SightItemComponent', () => {
  let component: SightItemComponent;
  let fixture: ComponentFixture<SightItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SightItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
