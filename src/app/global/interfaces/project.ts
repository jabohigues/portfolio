import { Habilitie } from "./habilitie";

export interface Project {
  id: number;
  title: string;
  folder: string;
  img: string;
  description: string;
  caller: string;
  category: string;
  tags: Habilitie[];
  hrefs: {
    github: string;
    project: string;
  };
}
