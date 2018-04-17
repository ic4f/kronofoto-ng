import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemDetailComponent }         from './item-detail.component';
import { ItemListComponent }           from './item-list.component';
import { CollectionItemListComponent } from './collection-item-list.component';
import { DonorItemListComponent }      from './donor-item-list.component';

const itemRoutes: Routes = [
  { path: 'items', component: ItemListComponent },
  { path: 'item/:identifier', component: ItemDetailComponent },
  { path: 'collection/:id/items', component: CollectionItemListComponent },
  { path: 'donor/:id/items', component: DonorItemListComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(itemRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ItemsRoutingModule {}
