export interface ClientEntity {
  id: string;
  name: string;
  contact: string;
  phone?: string;
  address: string;
  city?: string;
  created_date: Date;
  status: ClientStatus;
}

export enum ClientStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
  CANCELLED = "cancelled",
  ON_HOLD = "on_hold",
  ARCHIVED = "archived",
}
