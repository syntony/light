export class Review {
  constructor (
    public id?: number,
    public product?: number,
    public rate?: number,
    public text?: any,
    public created_by?: any,
    public created_at?: string
  ) {  }
}
