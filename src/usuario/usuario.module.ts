import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repositoty";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository]
})
export class UsuarioModule {}