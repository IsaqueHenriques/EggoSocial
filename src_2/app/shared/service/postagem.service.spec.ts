import { TestBed, inject } from '@angular/core/testing';

import { PostagemService } from './postagem.service';

describe('PostagemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostagemService]
    });
  });

  it('should be created', inject([PostagemService], (service: PostagemService) => {
    expect(service).toBeTruthy();
  }));
});
