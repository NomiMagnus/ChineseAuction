import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftListComponent } from './gift-list.component';

describe('GiftListComponent', () => {
  let component: GiftListComponent;
  let fixture: ComponentFixture<GiftListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftListComponent]
    });
    fixture = TestBed.createComponent(GiftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
