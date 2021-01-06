export class Profils{
  id: number;
  libelle: string;
  users: [];
  constructor(id: number, libelle: string) {
    this.id = id;
    this.libelle = libelle;
  }
}
