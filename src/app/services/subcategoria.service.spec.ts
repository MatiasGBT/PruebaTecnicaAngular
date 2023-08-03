import { TestBed } from '@angular/core/testing';

import { SubcategoriaService } from './subcategoria.service';
import { HttpClientModule } from '@angular/common/http';

describe('SubcategoriaService', () => {
  let service: SubcategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(SubcategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
