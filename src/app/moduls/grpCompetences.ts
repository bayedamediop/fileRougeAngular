export class GrpCompetences{
  id?: number;
  libelle: string;
  description: string;
  competence: string;
  constructor(id: number, libelle: string, description: string, competence: any) {
    this.id = id;
    this.libelle = libelle;
    this.description = description;
    this.competence = competence;
  }
}
