import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ANDRES LARRROTTA/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text', description: 'Propiedad para cambiar el texto del botón.' },
    primary: { control: 'boolean', description: 'Propiedad para cambiar el estado de los botones, es importante que por seccion debemos mantener un solo boton primary' },
    icon: { control: 'boolean', description: 'Propiedad para habilitar la vista del icono, es recomendable siempre tener en cada boton su respecitvo icono.' },
    iconName: { control: 'text', description: 'Propiedad para asignar los iconos de la libreria de iconos, tiene una dependencia de que este activo el icon' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    label: "Call",
    primary: true,
    icon: false,
    iconName: "call",
    size: "normal"
  },
};

export const PrimaryIcon = {
  args: {
    label: "Call",
    primary: true,
    icon: true,
    iconName: "call",
    size: "normal"
  },
};

export const Secundary = {
  args: {
    label: "Call",
    primary: false,
    icon: false,
    iconName: "call",
    size: "normal"
  },
};

export const SecundaryIcon = {
  args: {
    label: "Call",
    primary: false,
    icon: true,
    iconName: "call",
    size: "normal"
  },
};