declare module "br-validations" {
    import "br-validations";
  
    type Validator = {
        validate(text: string): boolean;
    };
  
    export const cpf: Validator;
  
    export const cnpj: Validator;
  
    export const pis: Validator;
  
    function ie(uf: string): Validator;
}
  