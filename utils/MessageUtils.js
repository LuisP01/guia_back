const MessageUtils = {
    GRR_001: "Petición exitosa",
    GRR_002: "No se pudo imprimir el descuento",
    getMessage: function (key, ...args) {
    const message = this[key];
    return message
      ? message.replace(/%s/g, () => args.shift())
      : "Mensaje no encontrado";
  },
}

export default MessageUtils;