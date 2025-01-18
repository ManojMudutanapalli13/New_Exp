import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepComponent } from './singlep.component';

describe('SinglepComponent', () => {
  let component: SinglepComponent;
  let fixture: ComponentFixture<SinglepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SinglepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
