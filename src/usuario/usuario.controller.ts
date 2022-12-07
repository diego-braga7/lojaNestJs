import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repositoty";

@Controller('/usuarios')
export class UsuarioController{

private usuarioRepository = new UsuarioRepository();

 @Post()   
 async criaUsuario(@Body() dadosDoUsuario){
    this.usuarioRepository.salvar(dadosDoUsuario);
    return {status:dadosDoUsuario};
 }

 @Get()
 async listaUsuarios() {
    return this.usuarioRepository.listar();
 }
}