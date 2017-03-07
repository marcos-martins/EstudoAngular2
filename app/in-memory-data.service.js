"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var contatos = [
            { id: 1, nome: 'Fulano', email: 'm.martins@outlook.com', telefone: '(00) 0000-0000' },
            { id: 2, nome: 'Ciclano', email: 'm.martins@outlook.com', telefone: '(00) 0000-0000' },
            { id: 3, nome: 'Marcos', email: 'm.martins@outlook.com', telefone: '(00) 0000-0000' },
            { id: 4, nome: 'Debora', email: 'm.martins@outlook.com', telefone: '(00) 0000-0000' },
            { id: 5, nome: 'Liara', email: 'm.martins@outlook.com', telefone: '(00) 0000-0000' }
        ];
        return { 'contatos': contatos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map