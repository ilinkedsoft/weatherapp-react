import { render, RenderResult } from "@testing-library/react";
import Toggler from ".";

describe("<Toggler>", () => {
  let renderResult: RenderResult;

  const props = {
    onToggle: jest.fn(),
  };

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    renderResult = render(<Toggler {...props} />);
  });
  it("should call onToggle function from props", () => {
    const { getByTestId } = renderResult;
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const toggler = getByTestId("toggler");

    toggler.click();
    expect(props.onToggle).toBeCalled();
  });
});
