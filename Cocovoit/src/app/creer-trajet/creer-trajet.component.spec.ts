import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerTrajetComponent } from './creer-trajet.component';

describe('CreerTrajetComponent', () => {
  let component: CreerTrajetComponent;
  let fixture: ComponentFixture<CreerTrajetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerTrajetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
