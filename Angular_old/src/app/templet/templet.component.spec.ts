import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletComponent } from './templet.component';

describe('TempletComponent', () => {
  let component: TempletComponent;
  let fixture: ComponentFixture<TempletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
