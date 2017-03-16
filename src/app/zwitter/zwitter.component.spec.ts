import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZwitterComponent } from './zwitter.component';

describe('ZwitterComponent', () => {
  let component: ZwitterComponent;
  let fixture: ComponentFixture<ZwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
