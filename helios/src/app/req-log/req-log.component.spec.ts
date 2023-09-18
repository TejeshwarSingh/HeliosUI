import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqLogComponent } from './req-log.component';

describe('ReqLogComponent', () => {
  let component: ReqLogComponent;
  let fixture: ComponentFixture<ReqLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
