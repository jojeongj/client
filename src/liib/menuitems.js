import Favorite from "../assets/Favorite";
import HomeAsset from "../assets/HomeAsset";
import Menu from "../assets/Menu";
import QrAsset from "../assets/QrAsset";
import TourAsset from "../assets/TourAsset";

export const menuItems = [
  { icon: <HomeAsset />, title: "home", url: "/" },
  { icon: <TourAsset />, title: "tour", url: "/tour" },
  { icon: <QrAsset />, title: "qr", url: "/qr" },
  { icon: <Favorite />, title: "favorite", url: "/fav" },
  { icon: <Menu />, title: "menu", url: "/menu" },
];
