import { IconButton, Flex } from "@radix-ui/themes";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { ThemeChanger } from "./ThemeChanger";

// Telegram 图标使用 CDN SVG，免导入文件
const TELEGRAM_ICON =
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg";

const ICON_SIZE = 24;

interface TopBarProps {
  onInboxOpen: () => void;
}

export function TopBar({ onInboxOpen }: TopBarProps) {
  return (
    <Flex
      justify="end"
      align="center"
      px="6"
      py="4"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: "blur(8px)",
      }}
    >
      <Flex gap="6" align="center">
        {/* 收信箱按钮 */}
        <IconButton
          size="4"
          variant="ghost"
          aria-label="收信箱"
          onClick={onInboxOpen}
        >
          <EnvelopeClosedIcon width={ICON_SIZE} height={ICON_SIZE} />
        </IconButton>

        {/* Telegram 按钮 */}
        <IconButton
          size="4"
          variant="ghost"
          aria-label="Telegram"
          onClick={() =>
            window.open("https://t.me/worldstarshare", "_blank")
          }
        >
          <img
            src={TELEGRAM_ICON}
            alt="Telegram"
            width={ICON_SIZE}
            height={ICON_SIZE}
            style={{
              filter: "invert(0.8)",
            }}
          />
        </IconButton>

        {/* 主题切换按钮 */}
        <ThemeChanger iconSize={ICON_SIZE} />
      </Flex>
    </Flex>
  );
}
