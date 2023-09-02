import { Component,OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  items: MenuItem[]=[] ;
  ngOnInit(): void {
      this.items = [
          { label: 'Añadir', icon: 'pi pi-fw pi-plus' },
          { label: 'Eliminar', icon: 'pi pi-fw pi-trash' },
          { label: 'Actualizar', icon: 'pi pi-fw pi-sync' },
      ];
  }
}
