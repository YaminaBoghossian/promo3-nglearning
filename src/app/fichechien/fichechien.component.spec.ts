import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichechienComponent } from './fichechien.component';

describe('FichechienComponent', () => {
  let component: FichechienComponent;
  let fixture: ComponentFixture<FichechienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichechienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichechienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
