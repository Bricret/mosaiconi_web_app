export interface OrderEntity {
  id: string;
  group_id: string;
  tracking: string;
  status_order: OrderStatus;
  shipping_type: ShippingType;
  us_delivery_date: Date;
  nic_approx_delivery_date: Date;
  nic_delivery_date: Date;
  comments: string;
}

export enum OrderStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
}

export enum ShippingType {
  STANDARD = "standard",
  EXPRESS = "express",
  PRIORITY = "priority",
}
