import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TariningComponent } from './tarining.component';

describe('TariningComponent', () => {
  let component: TariningComponent;
  let fixture: ComponentFixture<TariningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TariningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TariningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
