export interface CardProps {
  cardText: string;
  cardButton: string;
  cardButtonColorScheme?: string;
  cardTopic: string;
  cardLinkTo: string;
}

export interface ClockCardProps {
  cardTime: string;
  cardTag: string;
  cardIsAllRounded?: boolean;
}
