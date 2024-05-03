import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxReactiveVariableComponent } from './ngx-reactive-variable.component';

describe('NgxReactiveVariableComponent', () => {
  let component: NgxReactiveVariableComponent;
  let fixture: ComponentFixture<NgxReactiveVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxReactiveVariableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxReactiveVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
