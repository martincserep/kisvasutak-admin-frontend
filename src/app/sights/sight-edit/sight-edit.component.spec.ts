import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightEditComponent } from './sight-edit.component';

describe('SightEditComponent', () => {
  let component: SightEditComponent;
  let fixture: ComponentFixture<SightEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SightEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
