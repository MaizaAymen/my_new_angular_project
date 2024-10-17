import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aymen2Component } from './aymen2.component';

describe('Aymen2Component', () => {
  let component: Aymen2Component;
  let fixture: ComponentFixture<Aymen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aymen2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aymen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
