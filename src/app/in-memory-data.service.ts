import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pecas = [
      { id: 11, nome: 'Calota', categoria: 'Acabamento', imagem: null },
      { id: 12, nome: 'Adesivo', categoria: 'Acabamento', imagem: null },
      { id: 13, nome: 'Vela', categoria: 'Elétrica', imagem: null }
    ];
    return {pecas};
  }
}