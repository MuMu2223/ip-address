import { IconButton, Flex } from "@radix-ui/themes";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { ThemeChanger } from "./ThemeChanger";

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
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        WebkitBackdropFilter: "blur(8px)",
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
          style={{
            transition:
              "transform 0.25s ease, filter 0.25s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget.querySelector("img");
            if (target) {
              target.style.transform = "scale(1.2)";
              target.style.filter = "drop-shadow(0 0 8px #2AABEE)";
            }
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget.querySelector("img");
            if (target) {
              target.style.transform = "scale(1)";
              target.style.filter = "none";
            }
          }}
        >
          <img
            src={TELEGRAM_ICON}
            alt="Telegram"
            width={ICON_SIZE}
            height={ICON_SIZE}
            style={{
              transition: "transform 0.25s ease, filter 0.25s ease",
              filter: "none",
              // 让图标默认是品牌蓝色
              fill: "#2AABEE",
              color: "#2AABEE",
              // 为防止某些浏览器忽略 fill，可以包裹在蓝色圆底中
              backgroundColor: "#2AABEE20",
              borderRadius: "50%",
              padding: "4px",
            }}
          />
        </IconButton>

        {/* 主题切换 */}
        <ThemeChanger iconSize={ICON_SIZE} />
      </Flex>
    </Flex>
  );
}
