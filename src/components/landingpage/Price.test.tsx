import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Price from "./Price";

describe("Price", () => {
  it("renders without crashing", () => {
    render(<Price data={undefined} />);
  });

  it("renders the correct number of price cards", () => {
    const data: string | any[] = [
      /* sample data */
    ];
    render(<Price data={data} />);

    const cards = screen.getAllByRole("article");
    expect(cards.length).toEqual(data.length);
  });

  it("renders the correct price in each card", () => {
    const data = [
      { id: 1, price: 1000 },
      { id: 2, price: 2000 },
    ];
    render(<Price data={data} />);

    const prices = screen.getAllByText(/Rp\.\d+/);
    expect(prices[0]).toHaveTextContent("Rp.1000");
    expect(prices[1]).toHaveTextContent("Rp.2000");
  });

  // TODO: Add tests for other expected functionality and edge cases
});
