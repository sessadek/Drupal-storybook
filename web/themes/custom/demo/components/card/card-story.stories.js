import card from "./card-story.twig";
import "./card.css";
import "../link/link.css"

export default {
  title: "Components/Card",
  component: card,
  tags: ['autodocs'],
  argTypes: {
    bg_color: {
      control: { type: 'select' },
      options: ['red', 'yellow'],
    }
  },
  parameters: {
    layout: "centered"
  },
}

export const Default = {
  args: {
    title: "Default card",
    href: '#',
    link_title: 'En Savoir plus ...',
    teaser: 'Lorem Ipsum dolor sit amet ...',
    src: 'https://picsum.photos/id/237/200/300',
    alt: 'test alt'
  }
}

export const WithoutText = {
  args: {
    title: "card without Text",
    href: '#',
    link_title: 'En Savoir plus ...',
    src: 'https://picsum.photos/id/237/200/300',
    alt: 'test alt'
  }
}

export const withoutImage = {
  args: {
    title: "card without Image",
    href: '#',
    link_title: 'En Savoir plus ...',
    teaser: 'Lorem Ipsum dolor sit amet ...',
    alt: 'test alt'
  }
}

export const withoutLinkTitle = {
  args: {
    title: "card without Link Title",
    href: '#',
    teaser: 'Lorem Ipsum dolor sit amet ...',
    src: 'https://picsum.photos/id/237/200/300',
    alt: 'test alt'
  }
}




export const withoutLinkTitleImage = {
  args: {
    title: "My card",
    href: '#',
    teaser: 'Lorem Ipsum dolor sit amet ...',
    alt: 'test alt'
  }
}