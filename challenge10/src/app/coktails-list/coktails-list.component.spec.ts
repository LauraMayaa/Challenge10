import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoktailsListComponent } from './coktails-list.component';

describe('CoktailsListComponent', () => {
  let component: CoktailsListComponent;
  let fixture: ComponentFixture<CoktailsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoktailsListComponent]
    });
    fixture = TestBed.createComponent(CoktailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
