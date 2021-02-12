export class Profils{
  id: number;
  libele: string;
  users: [];
  constructor(id: number, libele: string) {
    this.id = id;
    this.libele = libele;
  }
}
