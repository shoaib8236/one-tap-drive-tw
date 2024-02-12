// types.tsx

import { Vehicle } from "./interface";

// input types

export type InputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
};

// select types

export type SelectProps = {
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
};

// button types

export type ButtonProps = {
  size?: "sm" | "md" | "lg";
  type?: "button" | "reset" | "submit" | undefined;
  text?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  themeColor?: string;
  icon?: React.ReactNode;
  iconAnimation?: boolean;
};

// page heading types

export type PageHeadingProps = {
  title?: string;
  subTitle?: string;
  className?: string;
};

// sections types

export type SectionProps = {
  children?: React.ReactNode;
  className?: string;
  bottomSpacing?: string;
};

// youtube player types

export type YoutubePlayerProps = {
  videoId?: string;
  id?: string;
  className?: string;
  iframeClassName?: string;
  style?: object;
  title?: string;
  loading?: string | "eager" | "lazy";
  opts?: object;
  onReady?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnd?: () => void;
  onError?: () => void;
  onStateChange?: () => void;
  onPlaybackRateChange?: () => void;
  onPlaybackQualityChange?: () => void;
};

// Upload types

export type UploadProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  onChange?: (e: File | null) => void;
};

// modal types

export type ModalProps = {
  width?: number;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  visible: boolean;
  onClose?: () => void;
};

// accordion types

export type AccordionProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  id?: string;
  isOpen?: boolean;
  onToggle?: () => void;
};

// Services Filters Modal types

export type ServicesFiltersModalProps = {
  visible: boolean;
  onClose?: () => void;
  onFinish?: () => void;
};

// Services Filters Header types

export type ServicesFiltersHeaderProps = {
  data?: {
    filter?: string;
    brand?: string;
    model?: string;
    year?: string;
  };
};

// Vehicle types

export type SericesCardProps = {
  data: Vehicle;
  key: number | undefined;
};