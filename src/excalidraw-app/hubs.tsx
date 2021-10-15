import ReactDOM from "react-dom";
import ExcalidrawApp from ".";

export function mount(domElement: HTMLElement) {
  ReactDOM.render(<ExcalidrawApp />, domElement);
}
