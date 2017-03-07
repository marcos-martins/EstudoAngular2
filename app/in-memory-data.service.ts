import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Contato} from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService {

    createDb():{}{

        let contatos: Contato[] =[
                {id:1,nome:'Fulano',email:'m.martins@outlook.com',telefone:'(00) 0000-0000'},
                {id:2,nome:'Ciclano',email:'m.martins@outlook.com',telefone:'(00) 0000-0000'},
                {id:3,nome:'Marcos',email:'m.martins@outlook.com',telefone:'(00) 0000-0000'},
                {id:4,nome:'Debora',email:'m.martins@outlook.com',telefone:'(00) 0000-0000'},
                {id:5,nome:'Liara',email:'m.martins@outlook.com',telefone:'(00) 0000-0000'}
        ];

        return {'contatos':contatos};
    }
}