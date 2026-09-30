import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra } from '../models/compra.model';
import { environment } from '../../environments/environment';

// =============================================
// CompraService — Maneja el registro y consulta de compras.
//
// Arquitectura:
//   CompraService → HttpClient → MockAPI /compras
//
// IMPORTANTE: Antes de usar, crear el recurso "compras" en MockAPI con campos:
//   id, usuarioEmail, productoId, productoNombre, cantidad, precioUnitario, total, fecha
// =============================================

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  // El endpoint de compras usa la misma base que productos
  private readonly endpoint = `${environment.apiUrl}/compras`;

  constructor(private http: HttpClient) {}

  // ── registrarCompra() ─────────────────────────────────────────────────────
  // POST /compras → guarda la compra en MockAPI
  registrarCompra(compra: Omit<Compra, 'id'>): Observable<Compra> {
    return this.http.post<Compra>(this.endpoint, compra);
  }

  // ── getComprasUsuario() ───────────────────────────────────────────────────
  // GET /compras?usuarioEmail=xxx → trae solo las compras del usuario actual
  // MockAPI soporta filtrado por query param
  getComprasUsuario(email: string): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.endpoint, {
      params: { usuarioEmail: email }
    });
  }
}
