export interface ClientOrderEntity {
  client_id: string;
  order_id: string;
  created_date: Date;
  products_buy: string[];
}
