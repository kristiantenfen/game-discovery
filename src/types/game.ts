export type Game = {
  id: string;
  name: string;
  background_image: string;
  platforms: Platform[];
  genres: Genre[];
  rating?: number;
  released?: string;
  description_raw?: string;
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
