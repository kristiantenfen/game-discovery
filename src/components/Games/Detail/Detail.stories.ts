import type { Meta, StoryObj } from "@storybook/react";

import GameDetail from ".";

const meta = {
  title: "Components/Game Detail",
  component: GameDetail,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GameDetail>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Component: Story = {
  argTypes: {
    game: {
      description: "Game object",
    },
    screenshots: {
      description: "Game's screenshots",
    },
  },
  args: {
    game: {
      id: "810234",
      released: "2023-01-20",
      rating: 4.5,
      name: "The Witcher 3: Wild Hunt – Blood and Wine",
      background_image:
        "https://media.rawg.io/media/games/b51/b51c3649322ac0de9dfbe83435eda449.jpg",
      platforms: [
        {
          platform: {
            id: "4",
            name: "PC",
            image_background:
              "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
          },
        },
      ],
      genres: [
        {
          id: "4",
          name: "Action",
          image_background:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        },
      ],
    },
    screenshots: [
      {
        id: 2,
        image:
          "https://media.rawg.io/media/screenshots/4a2/4a2976cb41da7786103c369e9db6a22b.jpg",
      },
      {
        id: 3445274,
        image:
          "https://media.rawg.io/media/screenshots/832/8320084ed333b22c77aad2e543a81f25.jpg",
      },
      {
        id: 3445275,
        image:
          "https://media.rawg.io/media/screenshots/553/553077f556ab34435cdc4f5c66c0ed59.jpg",
      },
      {
        id: 3445276,
        image:
          "https://media.rawg.io/media/screenshots/4a2/4a2976cb41da7786103c369e9db6a22b.jpg",
      },
    ],
  },
};
