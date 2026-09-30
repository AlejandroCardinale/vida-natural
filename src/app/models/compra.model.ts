// Modelo que representa una compra registrada en MockAPI
export interface Compra {
  id?:             string;  // MockAPI genera el id como string
  usuarioEmail:    string;  // Email del usuario que realizó la compra
  productoId:      number;
  productoNombre:  string;
  cantidad:        number;
  precioUnitario:  number;
  total:           number;  // precioUnitario * cantidad
  fecha:           string;  // ISO string: new Date().toISOString()
}
