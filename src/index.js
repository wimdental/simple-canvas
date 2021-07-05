/**
                            React Simple Canvas

    Source From : https://github.com/wimdental/simple-canvas

    MIT License

    Copyright (c) 2021 Wim Software LTDA

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

 */

import React from "react";
import propTypes from "prop-types";

interface CanvasProps {
  context?: "2d" | "webgl";
  ctxOptions?: any;
  draw?: boolean;
  onUpdate: (
    ctx: ?CanvasRenderingContext2D | WebGLRenderingContext,
    canvas: HTMLCanvasElement
  ) => void;
  onInit: (
    ctx: ?CanvasRenderingContext2D | WebGLRenderingContext,
    canvas: HTMLCanvasElement
  ) => void;
}

export class Canvas extends React.Component<CanvasProps, any, any> {
  static propTypes = {
    context: propTypes.string,
    ctxOptions: propTypes.object,
    draw: propTypes.bool,
    onUpdate: propTypes.func,
    onInit: propTypes.func
  };

  static defaultProps = {
    context: "2d",
    ctxOptions: {},
    draw: true,
    onUpdate: () => {},
    onInit: () => {}
  };

  constructor(props: CanvasProps, ctx: any) {
    super(props, ctx);
  }

  componentWillReceiveProps(nextProps: CanvasProps) {
    if (this.canvas && this.props.draw !== nextProps.draw) {
      if (this.props.context !== nextProps.context) {
        this.ctx = this.canvas.getContext(
          nextProps.context || "2d",
          nextProps.ctxOptions || {}
        );
        if (typeof this.props.onInit === "function") {
          this.props.onInit(this.ctx, this.canvas);
        }
      }
      if (nextProps.draw && typeof nextProps.onUpdate === "function") {
        requestAnimationFrame(this.onUpdate.bind(this, nextProps));
      }
    }
  }

  getRef(ref: HTMLCanvasElement) {
    if (!ref) return;
    this.ctx = ref.getContext(
      this.props.context || "2d",
      this.props.ctxOptions || {}
    );
    this.canvas = ref;
    if (typeof this.props.onInit === "function") {
      this.props.onInit(this.ctx, this.canvas);
    }
    if (this.props.draw && typeof this.props.onUpdate === "function") {
      requestAnimationFrame(this.onUpdate.bind(this, this.props));
    }
  }

  onUpdate(props: CanvasProps) {
    props = !props ? this.props : props;
    if (!this.canvas || !this.ctx) return;
    props.onUpdate(this.ctx, this.canvas);
    if (props.draw && typeof props.onUpdate === "function") {
      requestAnimationFrame(this.onUpdate.bind(this, props));
    }
  }

  render(): React.ReactNode {
    // eslint-disable-next-line
    const { context, ctxOptions, draw, onUpdate, onInit, ...rest } = this.props;
    return <canvas ref={ref => this.getRef(ref)} {...rest} />;
  }
}
