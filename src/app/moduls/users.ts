export class Users {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  avatar: string;
  telephone: any;
  profil: string;
  constructor(id: number, email: string, nom: string, prenom: string, avatar: string, address: string, type: string, profil: string, attente: string) {
    this.id = id;
    this.email = email;
    this.nom = nom;
    this.prenom = prenom;
    this.avatar = avatar;
    this.profil = profil;
  }
}
