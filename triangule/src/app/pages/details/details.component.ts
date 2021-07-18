import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class DetailsComponent implements OnInit {

  inputNome: string = '';
  inputIdade: string = '';
  inputProfissao: string = '';
  inputNacionalidade: string = '';
  inputGosto: string = '';
  inputNaoGosto: string = '';
  inputBio: string = '';

  imageUrl: string | ArrayBuffer =
    "./assets/add-pic.png";
  bgPosition = ["center", "bottom", "top"];
  bgPositionindex: number = 0;

  constructor() { }

  ngOnInit() {

    window.scrollTo(0, 0);
    console.log('pimba');

    const localData = JSON.parse(localStorage.getItem('profile'));
    console.log('localData', localData);
    this.inputNome = localData.nome;
    this.inputIdade = localData.idade;
    this.inputProfissao = localData.profissao;
    this.inputNacionalidade = localData.nacionalidade;
    this.inputGosto = localData.gosto;
    this.inputNaoGosto = localData.desgosto;
    this.inputBio = localData.bio;
    this.imageUrl = localData.picture;
    this.bgPositionindex = localData.picturePosition;
  }

}
