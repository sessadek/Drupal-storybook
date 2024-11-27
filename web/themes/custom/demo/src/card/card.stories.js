import card from "./card.twig";
import "./card.css";

export default {
  title: "Components/Card",
  component: card,
  parameters: {
    layout: "centered"
  },
}

export const Default = {
  args: {
    title: "My card",
    link: '#',
    link_label: 'En Savoir plus',
    teaser: 'Lorem Ipsum dolor sit amet ...',
    image_uri: 'https://picsum.photos/id/237/200/300',
    image_alt: 'test alt'
  }
}