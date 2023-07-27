import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdentitePage } from './identite.page';

describe('IdentitePage', () => {
  let component: IdentitePage;
  let fixture: ComponentFixture<IdentitePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IdentitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
