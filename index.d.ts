
declare module "react-simple-canvas"{
    declare namespace ReactSimpleCanvas {
        declare interface SCanvasProps{
            context?: '2d' | 'webgl';
            ctxOptions?: any;
            draw?: boolean;
            onUpdate?: (ctx:? CanvasRenderingContext2D | WebGLRenderingContext, canvas: HTMLCanvasElement) => void;
            onInit?: (ctx:? CanvasRenderingContext2D | WebGLRenderingContext, canvas: HTMLCanvasElement) => void;
        }
        declare class Canvas extends React.Component<SCanvasProps>{};
    }
    export = ReactSimpleCanvas
}
