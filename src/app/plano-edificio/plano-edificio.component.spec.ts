import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoEdificioComponent } from './plano-edificio.component';

describe('PlanoEdificioComponent', () => {
  let component: PlanoEdificioComponent;
  let fixture: ComponentFixture<PlanoEdificioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanoEdificioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoEdificioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
