export class Competences {
  id?: number;
  libelle: string;
  description: string;
  constructor(id: number, libelle: string, description: string) {
    this.id = id;
    this.libelle = libelle;
    this.description = description;
  }
}
