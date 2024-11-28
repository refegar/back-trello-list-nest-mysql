export interface PayloadType {
  email: string;
  userId: number;
  userNombre?:string;
}

export type Enable2FAType = {
  secret: string;
};
