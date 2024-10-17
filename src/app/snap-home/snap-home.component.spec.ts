import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnapHomeComponent } from './snap-home.component';
describe('SnapHomeComponent', () => {
  let component: SnapHomeComponent;
  let fixture: ComponentFixture<SnapHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnapHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
