export interface User {
  id: Number;
  firstName: String;
  lastName: String;
  email: String;
}
export interface SecretSantaGroup {
  id: Number;
  people: User[];
}
