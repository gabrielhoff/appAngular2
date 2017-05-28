import { Injectable } from '@angular/core';
import { CONTATOS } from './contatos-mock';
import { Contato } from './contato.model';

@Injectable()

export class ContatoService {

    getContatos(): Promise<Contato[]> {
        return Promise.resolve(CONTATOS);
    }

    getContato(id: number): Promise<Contato> {
        return this.getContatos()
            .then((contatos:Contato[]) => contatos.find(contato => contato.id === id)
            );
    }

    getContatosSlowly(): Promise<Contato[]> {
        return new Promise((resolve,reject) => {
            setTimeout(resolve,2000);
        })
        .then(() => {
            console.log('primeiro then');
            return 'Curso Angular 2 Plínio Naves';
        })
        .then((param: string) => {
            console.log('segundo then');
            console.log(param)
        })
        .then(() => {
            console.log('terceiro then');
            return this.getContatos();
        });        
    }

}