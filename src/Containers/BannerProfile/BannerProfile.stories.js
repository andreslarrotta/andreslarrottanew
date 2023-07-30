import { BannerProfile } from './BannerProfile';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ANDRES LARRROTTA/Containers/BannerProfile',
  component: BannerProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    src: { control: 'text', description: 'Url para cargar la imagen' }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    src: ""
  },
};