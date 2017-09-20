import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoucleComponentComponent } from './boucle-component.component';

describe('BoucleComponentComponent', () => {
  let component: BoucleComponentComponent;
  let fixture: ComponentFixture<BoucleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoucleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoucleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
