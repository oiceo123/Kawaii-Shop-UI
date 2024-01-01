export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  created_at: string;
  updated_at: string;
  category: {
    id: number;
    title: string;
  };
  images: {
    id: string;
    filename: string;
    url: string;
  }[];
};

export type ProductFilter = {
  id?: string;
  search?: string;
  page?: number;
  limit?: number;
  order_by?: string;
  sort?: string;
};
