import ReactDOM from "react-dom";
import ExcalidrawApp from ".";

export function mount(domElement: HTMLElement, link?: string) {
  const app = {};
  ReactDOM.render(<ExcalidrawApp link={link} app={app} />, domElement);
  const unmount = () => {
    ReactDOM.unmountComponentAtNode(domElement);
  };
  return { unmount, app };
}
