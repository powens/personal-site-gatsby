import React from 'react';
import { DiCodeBadge, DiJsBadge } from 'react-icons/di';

const iconTypes = {
  javascript: DiJsBadge,
};
const defaultIcon = DiJsBadge;

function getIcon(category: string): JSX.Node {
  if (category in iconTypes) {
    return iconTypes[category];
  }
  return defaultIcon;
}

export interface Props {
  category: string;
}

export default function PostIcon({ category }: Props) {
  const Icon = getIcon(category);
  return <Icon />;
}
