import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GamesList from ".";

const games = [
  {
    id: "810234",
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
];

describe("Game list component", () => {
  it("renders a heading", () => {
    render(<GamesList data={games} />);

    const heading = screen.getByTestId("game-list-component");

    expect(heading).toBeInTheDocument();
  });
});
