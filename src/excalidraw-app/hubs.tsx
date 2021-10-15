import ReactDOM from "react-dom";
import ExcalidrawApp from ".";
import type { RoomLinkData } from ".";

export function mount(domElement: HTMLElement, roomLinkData?: RoomLinkData) {
  ReactDOM.render(<ExcalidrawApp roomLinkData={roomLinkData} />, domElement);
}
