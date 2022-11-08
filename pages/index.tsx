import Head from "next/head";
import Image from "next/image";
import { PrismicNavigation } from "packages/navigation";
import styles from "../styles/Home.module.css";
import mock from "mocks/navigation.json";
import * as components from "components";

export default function Home() {
  return <PrismicNavigation navigation={mock} components={components} />;
}
