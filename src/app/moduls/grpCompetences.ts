export class GrpCompetences{
  id: number;
  libel: string;
  description: string;
  competence: any;
  constructor(id: number, libel: string, description: string, competence: any) {
    this.id = id;
    this.libel = libel;
    this.description = description;
    this.competence = competence;
  }
}
