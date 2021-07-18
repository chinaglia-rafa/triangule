import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideInAnimation } from 'src/app/animations';
import { UploaderService } from 'src/app/services/uploader';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class ProfileComponent implements OnInit {

  progress: number = 0;
  infoMessage: any;
  isUploading: boolean = false;
  file: File | null;
  imageUrl: string | ArrayBuffer =
    "./assets/add-pic.png";
  fileName: string = "No file selected";
  bgPosition = ["center", "bottom", "top"];
  bgPositionindex: number = 0;

  inputNome: string = '';
  inputIdade: string = '';
  inputProfissao: string = '';
  inputNacionalidade: string = '';
  inputGosto: string = '';
  inputNaoGosto: string = '';
  inputBio: string = '';

  constructor(private uploader: UploaderService, private router: Router) {
    this.file = null;
  }

  ngOnInit() {
    this.uploader.progressSource.subscribe(progress => {
      this.progress = progress;
    });

    const localData = JSON.parse(localStorage.getItem('profile'));
    if (localData) {
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

  onChange(file: File) {
    if (file) {
      this.fileName = file.name;
      this.file = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = event => {
        this.imageUrl = reader.result || '' ;
      };
    }
  }

  onUpload() {
    this.infoMessage = null;
    this.progress = 0;
    this.isUploading = true;

    this.uploader.upload(this.file).subscribe(message => {
      this.isUploading = false;
      this.infoMessage = message;
    });
  }

  save() {
    localStorage.setItem('profile', JSON.stringify({
      nome: this.inputNome,
      idade: this.inputIdade,
      profissao: this.inputProfissao,
      nacionalidade: this.inputNacionalidade,
      gosto: this.inputGosto,
      desgosto: this.inputNaoGosto,
      bio: this.inputBio,
      picture: this.imageUrl,
      picturePosition: this.bgPositionindex,
    }));

    this.router.navigate(['details']);
  }

}
