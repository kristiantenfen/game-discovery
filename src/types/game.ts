export type Game = {
  id: string;
  name: string;
  background_image: string;
  platforms: Platform[];
  genres?: Genre[];
  stores?: Store[];
  rating?: number;
  released?: string;
  description_raw?: string;
  short_screenshots?: Screenshot[];
};

export type Screenshot = {
  id: number;
  image: string;
};
export type Genre = {
  id: string;
  name: string;
  image_background: string;
};
export type Platform = {
  platform: {
    id: string;
    name: string;
    image_background: string;
  };
};
export type Store = {
  store: {
    id: string;
    name: string;
    image_background: string;
  };
};
