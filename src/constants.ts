import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

export const styles = {
  paddingX: ["0.25in", "0.5in", "0.75in", "1.25in"],
  navBarOffset: 69.2,
  sectionTopMargin: ["8em", "8em", 0],
};

export enum LocationHashEnum {
  About = "about",
  Sponsors = "sponsors",
  FAQ = "faq",
}

export const locations: { href: string; label: string }[] = [
  { href: `#${LocationHashEnum.About}`, label: "About" },
  { href: `#${LocationHashEnum.Sponsors}`, label: "Sponsors" },
  { href: `#${LocationHashEnum.FAQ}`, label: "FAQ" },
];

export const socials: { icon: IconDefinition; href: string }[] = [
  { icon: faFacebookSquare, href: "https://www.facebook.com/uottahack" },
  { icon: faInstagram, href: "https://www.instagram.com/uottahack" },
  { icon: faTwitterSquare, href: "https://twitter.com/uottahack" },
];
