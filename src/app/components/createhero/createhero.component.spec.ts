import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateheroComponent } from './createhero.component';

describe('CreateheroComponent', () => {
  let component: CreateheroComponent;
  let fixture: ComponentFixture<CreateheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
