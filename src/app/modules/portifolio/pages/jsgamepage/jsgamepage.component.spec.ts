import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsgamepageComponent } from './jsgamepage.component';

describe('JsgamepageComponent', () => {
  let component: JsgamepageComponent;
  let fixture: ComponentFixture<JsgamepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsgamepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsgamepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
