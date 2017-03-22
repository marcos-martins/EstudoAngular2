import { Component,EventEmitter,Input,OnChanges ,OnInit, Output,SimpleChange,SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import {Contato} from './contato.model';
import {ContatoService} from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html',
    styles:[`
        .cursor-pointer:hover{
            cursor: pointer;
        }
    `]
})
export class ContatoBuscaComponent implements OnInit, OnChanges {
    
    @Input('mySearch') busca: string;   
    @Output() buscaChange: EventEmitter<string> = new EventEmitter<string>();

    contatos: Observable<Contato[]>;

    private termosDaBusca: Subject<string> = new Subject<string>();
    
    constructor(
        private contatoService: ContatoService,
        private router: Router
    ) { }

    ngOnInit():void { 
        this.contatos = this.termosDaBusca
            .debounceTime(300) //aguarde por 300ms para emitir novos eventos
            .distinctUntilChanged() //ignore se o proximo termo de busca for igual  ao anterior
            .switchMap(term => {              
                return term ? this.contatoService.search(term) : Observable.of<Contato[]>([]);
            }).catch(err => {
                console.log(err);
                return Observable.of<Contato[]>([]);
            });

        //Para teste
        /*this.contatos.subscribe((contatos: Contato[])=> {
            console.log('retornou o servidor: ', contatos);
        });*/
    }
    
    ngOnChanges(changes: SimpleChanges):void{
        let busca: SimpleChange = changes['busca'];
        this.search(busca.currentValue);
    }

    search(termo : string): void{       
        this.termosDaBusca.next(termo);
        this.buscaChange.emit(termo);
    }

    verDetalhe(contato : Contato){
        let link = ['contato/save',contato.id];
        this.router.navigate(link);
         this.buscaChange.emit('');
    }
}