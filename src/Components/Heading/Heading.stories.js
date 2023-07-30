import { Heading } from './Heading';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ANDRES LARRROTTA/Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: { control: 'text', description: 'Propiedad del texto que va a tener el texto, ya sea un título o parrafo.' }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Heading1 = {
  args: {
    text: "Andres Larrotta",
    type: "h1"
  },
};

export const Heading2 = {
  args: {
    text: "Andres Larrotta",
    type: "h2"
  },
};

export const Heading3 = {
  args: {
    text: "Andres Larrotta",
    type: "h3"
  },
};

export const Heading4 = {
  args: {
    text: "Andres Larrotta",
    type: "h4"
  },
};

export const Heading5 = {
  args: {
    text: "Andres Larrotta",
    type: "h5"
  },
};

export const Heading6 = {
  args: {
    text: "Andres Larrotta",
    type: "h6"
  },
};

export const HeadingParagraph = {
  args: {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    type: "paragraph"
  },
};