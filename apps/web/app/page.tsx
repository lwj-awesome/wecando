import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import {
  RedTextColor,
  BlueTextColor,
  YellowTextColor,
  fonts,
} from "@wecando/themes";
type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

const 폰트잘됨 = fonts.heading["3xl"];
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ThemeImage
          className={styles.logo}
          srcLight="turborepo-dark.svg"
          srcDark="turborepo-light.svg"
          alt="Turborepo logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li style={폰트잘됨}>
            Color Test
            <code style={{ color: YellowTextColor }}>
              apps/web/app/page.tsx
            </code>
          </li>
          <li style={{ color: BlueTextColor }}>Color Test</li>
        </ol>
      </main>
    </div>
  );
}
