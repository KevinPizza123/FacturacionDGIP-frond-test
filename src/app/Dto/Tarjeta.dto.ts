export class TarjetaDTO {
    idTarjeta: string;
    nombre_tarjeta: string;
    desc_tarjeta: string;
    estado_tarjeta: string;
    fecha_tarjeta: string;
    id_usuario_tarjeta: string;

    constructor(data: TarjetaDTO){
        this.idTarjeta= data.idTarjeta;
        this.nombre_tarjeta= data.nombre_tarjeta;
        this.desc_tarjeta= data.desc_tarjeta;
        this.estado_tarjeta= data.estado_tarjeta;
        this.fecha_tarjeta= data.fecha_tarjeta;
        this.id_usuario_tarjeta=data.id_usuario_tarjeta;

    }
}

