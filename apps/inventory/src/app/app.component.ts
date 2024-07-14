import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ProductsComponent } from '@angular-monorepo/products';
import { ButtonComponent } from '@angular-monorepo/Button';
import { CardComponent } from '@angular-monorepo/Card';
import { ProductService } from './product.service';
import { CartComponent } from './Cart/Cart.component';

@Component({
  standalone: true,
  imports: [ProductsComponent, ButtonComponent, CardComponent , CartComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  product: any[] = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }



  title = 'inventory';

  onButtonClick(event: any): void {
    console.log('Button clicked!', event);
  }
}
