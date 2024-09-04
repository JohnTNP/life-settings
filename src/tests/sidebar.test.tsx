import { beforeEach, describe, expect, test } from "vitest";
import { renderWithAppState } from "./test-utils";
import { Sidebar } from "@/components/sidebar";
import { act, screen } from "@testing-library/react";

describe("Sidebar", () => {
  beforeEach(() => {
    renderWithAppState(<Sidebar />);
  });
  test("it should show Profile tab", () => {
    expect(screen.getByText("Profile")).toBeDefined();
  });

  test("tab should be clickable", () => {
    const profileButton = screen.getAllByRole("button")[0]
    const anotherButton = screen.getAllByRole("button")[1]

    expect(profileButton.innerHTML).toEqual("Profile");
    expect(anotherButton.innerHTML).not.toEqual("Profile");

    expect(anotherButton.className).not.toMatch(/bg-secondary/)

    act(() => {
      anotherButton.click()
    })

    expect(anotherButton.className).toMatch(/bg-secondary/)
  })

  
});