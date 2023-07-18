interface MAP {
  id?: string;
  isroot?: string;
  mapId?: string;
  more?: boolean;
  text?: string;
  topic?: string;
  left?: boolean;
  parentid?: string;
}

export interface MapType {
  created_at?: string;
  data?: MAP[];
  mapId?: string;
  updated_at?: string;
  topic?: string;
  user?: string;
}
