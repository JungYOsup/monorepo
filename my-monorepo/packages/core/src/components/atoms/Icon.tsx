import {
  IconAlertTriangle,
  IconCamera,
  IconChartBar,
  IconChevronDown,
  IconCircleCheck,
  IconClipboardList,
  IconClock,
  IconDownload,
  IconEdit,
  IconFileText,
  IconFilter,
  IconFlag,
  IconGrid3x3,
  IconHome,
  IconList,
  IconMenu2,
  IconMessageCircle,
  IconPackage,
  IconPlayerPause,
  IconPlayerPlay,
  IconPlus,
  IconProps,
  IconScan,
  IconSearch,
  IconSend,
  IconSignature,
  IconSquare,
  IconTrash,
  IconTrendingUp,
  IconUpload,
  IconUsers,
  IconX,
} from "@tabler/icons-react";

export interface Icon extends IconProps {
  name: string;
}

const iconMap = {
  list: IconList,
  fileText: IconFileText,
  trendingUp: IconTrendingUp,
  package: IconPackage,
  checkCircle: IconCircleCheck,
  flag: IconFlag,
  search: IconSearch,
  grid: IconGrid3x3,
  menu: IconMenu2,
  close: IconX,
  play: IconPlayerPlay,
  pause: IconPlayerPause,
  square: IconSquare,
  clock: IconClock,
  message: IconMessageCircle,
  scan: IconScan,
  plus: IconPlus,
  edit: IconEdit,
  trash: IconTrash,
  camera: IconCamera,
  upload: IconUpload,
  alert: IconAlertTriangle,
  download: IconDownload,
  send: IconSend,
  signature: IconSignature,
  users: IconUsers,
  filter: IconFilter,
  chevronDown: IconChevronDown,
  home: IconHome,
  clipboard: IconClipboardList,
  chart: IconChartBar,
};

export function Icon({ name, size = 20, ...props }: Icon) {
  const IconComponent = iconMap[name as keyof typeof iconMap];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent size={size} {...props} />;
}
