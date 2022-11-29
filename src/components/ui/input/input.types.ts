export interface IInput {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
}