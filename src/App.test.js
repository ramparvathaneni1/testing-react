import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Testing the Web Page", () => {
  test("renders an h1 tag", () => {
    const app = render(<App />);
    const heading = app.getByRole("heading");
    expect(heading).toHaveTextContent("Super Duper Company");
  });

  /* test("The About Us section exists", () => {
    const app = render(<App />);
    const about = app.queryByText("We Rock");
    expect(about).toBeInTheDocument();
  }); */

  test("clicking the button displays the About Us section", () => {
    const app = render(<App />);
    const button = app.getByText("About Us");
  
    let about = app.queryByText("We Rock");
    expect(about).toBeNull();
  
    fireEvent.click(button);
  
    about = app.getByText("We Rock");
    expect(about).toBeInTheDocument();
  });


  test("clicking close button to remove main section", () => {
    const app = render(<App />);
    const aboutBtn = app.getByText("About Us");
    const closeButton = app.getByText("Close");

    fireEvent.click(aboutBtn);

    fireEvent.click(closeButton);

    let main  = app.queryByText("We Rock");
    expect(main).toBeNull();
  });
  
  
});
