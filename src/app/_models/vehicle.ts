export interface Vehicle {
  /** Marca do veículo, ex: "Chevrolet" */
  brand: string;

  /** Modelo e versão, ex: "Camaro SS V8" */
  model: string;

  /** Ano de fabricação, ex: 2011 */
  year: number;

  /** Quilometragem em quilômetros, ex: 65000 */
  mileageKm: number;

  /** Caminho da imagem do veículo */
  imageUrl: string;

  /** Texto de promoção (opcional) */
  badge?: string;

  /** Descrição adicional ou breve resumo */
  description?: string;

  /** Lista de características do veículo */
  features: string[];

  /** Preço anterior (para promoções), ex: 189990 */
  oldPrice?: number;

  /** Preço atual, ex: 180000 */
  newPrice: number;

  /** Nota de avaliação (0–5 estrelas) */
  rating: number;

  /** Disponibilidade do veículo */
  stockStatus: 'Disponível' | 'Indisponível' | 'Sob Encomenda';

  /** Informações adicionais ou metadados */
  metadata?: {
    /** Exemplo: "PROMOÇÃO", "NOVO", etc */
    tag?: string;
    /** Data de publicação ou atualização */
    updatedAt?: Date;
  };
}
