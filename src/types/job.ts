export interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  createdAt: string; // or Date, depending on your API
}

export interface JobInput {
  title: string;
  description: string;
  location: string;
}
