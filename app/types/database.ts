export interface Location {
  id: number;
  name: string;
  category: 'attraction' | 'restaurant' | 'cafe' | 'temple';
  description: string;
  latitude: number;
  longitude: number;
  phone?: string;
  address: string;
  opening_hou: string;
  closed_days: string;
  image_url: string;
}