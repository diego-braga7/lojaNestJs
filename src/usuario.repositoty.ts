
export class UsuarioRepository {
private usuarios = [];

async salvar(usuario){
    this.usuarios.push(usuario);
}

async buscar(){
    return this.usuarios;
}

}