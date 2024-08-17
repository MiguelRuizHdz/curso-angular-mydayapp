import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido a mi primera aplicación con Angular!';
  tasks = [
    "Instalar el Angular CLI",
    'Crear proyecto',
    'Crear componente',
    'Crear servicio',
  ];
  name = 'Miguel';
  age = '18';
  disabled = true;
  img = "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png";
  person = {
    name: 'Miguel',
    age: '18',
    avatar: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png",
  };
}
