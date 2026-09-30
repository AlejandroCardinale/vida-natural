import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../../services/product.service';
import { AuthService } from '../../../services/auth.service';
import { Product } from '../../../models/product.model';
import { ConfirmarEliminarComponent } from '../confirmar-eliminar/confirmar-eliminar.component';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  producto: Product | undefined;
  cargando = true;
  error    = '';

  constructor(
    private route:          ActivatedRoute,
    private router:         Router,
    private productService: ProductService,
    private authService:    AuthService,
    private dialog:         MatDialog,
    private snackBar:       MatSnackBar
  ) {}

  get esAdmin(): boolean {
    return this.authService.esAdmin();
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (isNaN(id)) {
      this.error    = 'ID de producto inválido.';
      this.cargando = false;
      return;
    }

    this.cargarProducto(id);
  }

  cargarProducto(id: number): void {
    this.productService.getProductById(id).subscribe({
      next: (producto) => {
        this.cargando = false;
        if (!producto) {
          this.error = 'El producto no fue encontrado.';
          return;
        }
        this.producto = producto;
      },
      error: () => {
        this.cargando = false;
        this.error    = 'Error al cargar el producto.';
      }
    });
  }

  editar(): void {
    if (this.producto) {
      this.router.navigate(['/productos', this.producto.id, 'editar']);
    }
  }

  eliminar(): void {
    if (!this.producto) return;

    const dialogRef = this.dialog.open(ConfirmarEliminarComponent, {
      width: '400px',
      data: { nombreProducto: this.producto.nombre }
    });

    dialogRef.afterClosed().subscribe((confirmado: boolean) => {
      if (!confirmado || !this.producto) return;

      this.productService.deleteProduct(this.producto.id).subscribe({
        next: () => {
          this.snackBar.open(`"${this.producto!.nombre}" eliminado correctamente.`, 'Cerrar', {
            duration: 3000
          });
          this.router.navigate(['/productos']);
        },
        error: () => {
          this.snackBar.open('Error al eliminar el producto.', 'Cerrar', { duration: 3000 });
        }
      });
    });
  }

  volver(): void {
    this.router.navigate(['/productos']);
  }
}
