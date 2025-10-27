import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  fill?: string;
}

export const PlayIcon: React.FC<IconProps> = ({ width = 24, height = 24, className, fill = "currentColor" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const PauseIcon: React.FC<IconProps> = ({ width = 24, height = 24, className, fill = "currentColor" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
  </svg>
);

export const PreviousIcon: React.FC<IconProps> = ({ width = 24, height = 24, className, fill = "currentColor" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M6 6h2v12H6V6zM10 12l8.5 6V6L10 12z" />
  </svg>
);

export const NextIcon: React.FC<IconProps> = ({ width = 24, height = 24, className, fill = "currentColor" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
  </svg>
);

export const SeekBackwardIcon: React.FC<IconProps> = ({ width = 24, height = 24, className, fill = "currentColor" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
  </svg>
);

export const SeekForwardIcon: React.FC<IconProps> = ({ width = 24, height = 24, className, fill = "currentColor" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M13 6v12l8.5-6L13 6zM4 18l8.5-6L4 6v12z" />
  </svg>
);

export const ShuffleIcon: React.FC<IconProps> = ({ width = 16, height = 16, className, fill = "currentColor" }) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill={fill} className={className}>
    <path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.949l-1.018 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.744 5.277l-.979.93-2.483-2.481A2.25 2.25 0 00.39 3.5z" />
  </svg>
);

export const VolumeIcon: React.FC<IconProps> = ({ width = 16, height = 16, className, fill = "currentColor" }) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill={fill} className={className}>
    <path d="M9.383 3.076A1 1 0 0 1 10 4v8a1 1 0 0 1-1.617.793L5.5 10.5H2a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1h3.5l2.883-2.293a1 1 0 0 1 1.617.793z" />
  </svg>
);

export const VolumeMutedIcon: React.FC<IconProps> = ({ width = 16, height = 16, className, fill = "currentColor" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill={fill}
    className={className}
  >
    <path d="M9.383 3.076A1 1 0 0 1 10 4v8a1 1 0 0 1-1.617.793L5.5 10.5H2a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1h3.5l2.883-2.293a1 1 0 0 1 1.617.793z" />
    <path
      d="M2 2l12 12"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ width = 16, height = 16, className, fill = "currentColor" }) => (
  <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill={fill} className={className}>
    <path d="M3.75 3.75a.75.75 0 0 1 1.06 0L8 6.94l3.19-3.19a.75.75 0 1 1 1.06 1.06L9.06 8l3.19 3.19a.75.75 0 1 1-1.06 1.06L8 9.06l-3.19 3.19a.75.75 0 0 1-1.06-1.06L6.94 8 3.75 4.81a.75.75 0 0 1 0-1.06z" />
  </svg>
);

export const CloseIconLarge: React.FC<IconProps> = ({ width = 16, height = 16, className, fill = "currentColor" }) => (
  <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill={fill} className={className}>
    <path d="M4.47 4.47a.75.75 0 0 1 1.06 0L8 6.94l2.47-2.47a.75.75 0 0 1 1.06 1.06L9.06 8l2.47 2.47a.75.75 0 0 1-1.06 1.06L8 9.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L6.94 8 4.47 5.53a.75.75 0 0 1 0-1.06z" />
  </svg>
);

export const CloseIconXLarge: React.FC<IconProps> = ({ width = 24, height = 24, className, fill = "currentColor" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ width = 16, height = 16, className, fill = "currentColor" }) => (
  <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill={fill} className={className}>
    <path d="M8 2.5a.75.75 0 0 1 .75.75v4h4a.75.75 0 0 1 0 1.5h-4v4a.75.75 0 0 1-1.5 0v-4h-4a.75.75 0 0 1 0-1.5h4v-4A.75.75 0 0 1 8 2.5z" />
  </svg>
);

export const MinusIcon: React.FC<IconProps> = ({ width = 16, height = 16, className, fill = "currentColor" }) => (
  <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill={fill} className={className}>
    <path d="M3.25 8a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8A.75.75 0 0 1 3.25 8z" />
  </svg>
);

export const GalleryIcon: React.FC<IconProps> = ({ width = 20, height = 20, className, fill = "currentColor" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
  </svg>
);

export const ListIcon: React.FC<IconProps> = ({ width = 20, height = 20, className, fill = "currentColor" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
  </svg>
);

export const ExpandIcon = "/assets/expand.svg";
export const CollapseIcon = "/assets/collapse.svg";
export const SongLyricsIcon = "/assets/song-lyrics.svg";
