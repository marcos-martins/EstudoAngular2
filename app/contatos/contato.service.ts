import{ Injectable } from '@angular/core';

import {Contato} from './contato.model';
import {CONTATOS} from './contatos.mock';

@Injectable()
export class ContatoService{

    getContatos():Promise<Contato[]>{
        return Promise.resolve(CONTATOS);
    }

    getContato(id: number): Promise<Contato>{
        return this.getContatos().then((contatos : Contato[]) =>{
                return contatos.find((contato) =>{
                        return contato.id === id;
                });
        });
    }

    getContatosSlowly():Promise<Contato[]>{
        return new Promise((resolve,reject)=>{
            setTimeout(resolve,4000);
        }).then(()=>this.getContatos());        
    }
}