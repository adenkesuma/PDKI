export interface VideoProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  videoUrl: string;
  thumbnailUrl: string;
  isPrivate: boolean;
  harga: number;
  publishedDate: string;
  categories: string;
  tags: string;
  view: number;
  instructor: string;
}

export interface NewsProps {
  id: number;
  title: string;
  content: string;
  description: string;
  publishedDate: string;
  image: string;
  video: string;
  tags: string;
  categories: string;
  published: boolean;
  region: string;
}

export interface ConferenceProps {
  id: number;
  title: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  location: string;
  organizer: string;
  websiteUrl: string;
  registrationRequired: boolean;
  registrationDeadline: string;
  speakers: string;
  isFree: boolean;
  topic: string;
  createdAt: string;
  updatedAt: string;
}

export interface Item {
  id: number;
}


export interface HeaderProps {
  heading?: string;
  subheading?: string;
}

export interface FormData {
  name: string;
  email: string;
}

export interface RegionProps {
  selectedRegion: string;
}

export interface SearchProps {
  search: string;
  onSetSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface VideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string;
}