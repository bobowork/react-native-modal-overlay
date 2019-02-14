declare module 'react-native-modal-overlay' {
    declare class OverlayComponent extends React.Component<any> {}
    declare const OverlayBase: Constructor<NativeMethodsMixin> & typeof OverlayComponent;
    export class Overlay extends OverlayBase {}
}