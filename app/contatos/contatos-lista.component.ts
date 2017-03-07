import {Component,OnInit} from '@angular/core';

import {Contato} from './contato.model';
import {ContatoService} from './contato.service';
import {DialogService} from '.././dialog.service';

@Component({
    moduleId: module.id,
    selector:'contatos-lista',
    templateUrl:'contatos-lista.component.html'
})
export class ContatosListaComponent implements OnInit{

    contatos: Contato[]=[];
    mensagem: {};
    classesCss: {};
    private currentTimeOut: any;

    constructor(
        private contatoService: ContatoService,
        private dialogService: DialogService
    ){}

    ngOnInit() : void{
        this.contatoService.getContatos().then((contatos: Contato[])=>{
            this.contatos = contatos;
        }).catch(err => {
            console.log('Aconteceu um erro: ',err);
        })}

        onDelete(contato: Contato): void{
           this.dialogService.confirm('Deseja deletar o contato: ' + contato.nome)
           .then((canDelete: boolean)=>{
                if(canDelete){
                    this.contatoService.deleteContato(contato)
                    .then(()=> {
                        this.contatos = this.contatos.filter(c => c.id != contato.id);
                        this.mostrarMensagem({
                                tipo:'success',
                                mensagem:'Contato deletado!'
                        });
                    }).catch(err =>{
                        console.log(err);
                    });
                }
           });
        }

    private mostrarMensagem(mensagem:{tipo: string, mensagem: string}):void{
        this.mensagem= mensagem;
        this.montarClasses(mensagem.tipo);

        if(this.currentTimeOut){
            clearTimeout(this.currentTimeOut);
        }

        this.currentTimeOut = setTimeout(()=>{
            this.mensagem = undefined;
        },3000);
    }

    private montarClasses(tipo: string): void{
        this.classesCss ={
            'alert':true
        };
        this.classesCss['alert-'+tipo] = true;
    }
}