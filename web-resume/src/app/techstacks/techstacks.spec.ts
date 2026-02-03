import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techstacks } from './techstacks';

describe('Techstacks', () => {
  let component: Techstacks;
  let fixture: ComponentFixture<Techstacks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Techstacks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Techstacks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
