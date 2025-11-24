/**
 * Entidade Member (padrão Domain)
 */

export interface MemberProps {
  id: string;
  nome: string;
  email: string;
  telefone?: string;
  cidade?: string;
  areaAtuacao?: string;
  codigoIndicacao?: string;
  createdAt: Date;
  uplines?: string[];
}

export class Member {
  private props: MemberProps;

  constructor(props: MemberProps) {
    this.props = props;
  }

  get id() {
    return this.props.id;
  }

  get nome() {
    return this.props.nome;
  }

  get email() {
    return this.props.email;
  }

  get telefone() {
    return this.props.telefone;
  }

  get cidade() {
    return this.props.cidade;
  }

  get areaAtuacao() {
    return this.props.areaAtuacao;
  }

  get codigoIndicacao() {
    return this.props.codigoIndicacao;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get uplines() {
    return this.props.uplines;
  }

  toJSON() {
    return { ...this.props };
  }
}
