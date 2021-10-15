import ReactDOM from "react-dom";
import ExcalidrawApp from ".";

// Will be available in UMD build on `Excalidraw.mount()`
export function mount(domElement: HTMLElement) {
  ReactDOM.render(<ExcalidrawApp />, domElement);
}
