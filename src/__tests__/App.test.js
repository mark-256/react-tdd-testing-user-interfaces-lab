import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of myself with descriptive alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/profile|portrait|photo|me/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});


test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph with a short biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/i am|developer|student|enthusiast/i);
  expect(paragraph).toBeInTheDocument();
});


test("displays links to GitHub and LinkedIn profiles", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedInLink = screen.getByRole("link", { name: /linkedin/i });

  expect(githubLink).toBeInTheDocument();
  expect(linkedInLink).toBeInTheDocument();

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("github.com")
  );
  expect(linkedInLink).toHaveAttribute(
    "href",
    expect.stringContaining("linkedin.com")
  );
});

