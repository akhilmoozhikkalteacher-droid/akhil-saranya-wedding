export interface EventInfo {
  title: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  place: string;
  map: string;
}

export interface WeddingDayProps {
  ceremony: EventInfo;
  reception: EventInfo;
}