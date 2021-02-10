export class Referentiels{
  id: number;
  libelle: string;
  presentation: string;
  programme: string;
  evaluation: string;
  admission: string;
  grpecompetence: any;
  constructor(id: number, libelle: string, grpecompetence: any,
              presentation: string, programme: string, evaluation: string, admission: string) {
    this.id = id;
    this.libelle = libelle;
    this.grpecompetence = grpecompetence;
    this.presentation = presentation;
    this.programme = programme;
    this.evaluation = evaluation;
    this.admission = admission;
  }
}
