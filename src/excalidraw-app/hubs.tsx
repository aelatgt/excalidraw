import ReactDOM from "react-dom";
import ExcalidrawApp from ".";

export function mount(domElement: HTMLElement, link?: string) {
  ReactDOM.render(<ExcalidrawApp link={link} />, domElement);
  const unmount = () => {
    ReactDOM.unmountComponentAtNode(domElement);
  };
  return unmount;
}
