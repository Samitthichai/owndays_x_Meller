export type ColorLocalization = {
  language_code: string;
  name: string;
};

export type ProductColor = {
  id: number;
  code: string;
  name: string;
  path: string | null;
  hex_code: string | null;
  localizations: ColorLocalization[];
};

export type ProductImage = {
  id: number;
  path: string;
  path_webp: string | null;
  order: number;
};

export type ProductSKU = {
  id: number;
  code: string;
  jan_code: string;
  try_on_code: string;
  order: number;
  size: string | null;
  is_default_display: number;
  is_online_exclusive: boolean;
  colors: ProductColor[];
  images: ProductImage[];
};

export type FrameType = {
  id: number;
  code: string;
};

export type Localization = {
  id: number;
  language_code: string;
  name: string | null;
  description: string;
};

export type ProductItem = {
  product: {
    id: number;
    code: string;
    name: string | null;
    model_name: string;
    lens_width: string;
    lens_height: string;
    bridge_width: string;
    temple_depth: string;
    frame_weight: string;
    is_made_in_japan: boolean;
    is_free: boolean;
    size_frame: string;
    size_range: string;
  };
  localization: Localization;
  frame_types: FrameType[];
  selling_setting: {
    id: number;
    country_code: string;
    price: number;
    raw_price: number;
    code: string | null;
    is_published: boolean;
    status: number;
    in_stock: number;
  };
  skus: ProductSKU[];
};

export type ProductsResponse = {
  success: boolean;
  message: string;
  total: number;
  not_found: string[];
  data: ProductItem[];
};
