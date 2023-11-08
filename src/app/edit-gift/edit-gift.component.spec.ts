import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGiftComponent } from './edit-gift.component';

describe('EditGiftComponent', () => {
  let component: EditGiftComponent;
  let fixture: ComponentFixture<EditGiftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGiftComponent]
    });
    fixture = TestBed.createComponent(EditGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
