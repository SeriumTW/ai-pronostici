import { Component, OnInit } from '@angular/core';

export interface UserProfile {
  name: string;
  surname: string;
  username: string;
  accountCreation: Date;
  email: string;
  imageUrl: string;
  // password: string; // Aggiungi solo se necessario
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  isEditing: boolean = false;
  userProfile!: UserProfile;

  constructor() {}

  ngOnInit(): void {
    this.userProfile = {
      name: 'Mario',
      surname: 'Rossi',
      username: 'mario.rossi',
      accountCreation: new Date(), // Sostituisci con dati reali
      email: 'mario.rossi@example.com',
      imageUrl: 'path_to_image.jpg',
      // password: '', // Aggiungi solo se necessario
    };
  }

  enableEditing(): void {
    this.isEditing = true;
  }

  onSubmit(): void {
    // Logica per inviare i dati modificati al server
    // Ad esempio, utilizza un servizio Angular per effettuare la richiesta HTTP
    console.log('Dati inviati:', this.userProfile);
    this.isEditing = false;
  }

  // onFileSelected(event): void {
  //   // Logica per gestire il file selezionato
  //   // Ad esempio, caricare l'immagine su un server e aggiornare `userProfile.imageUrl`
  //   console.log('File selezionato:', event.target.files[0]);
  // }
}
