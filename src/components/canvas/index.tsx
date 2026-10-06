import { Component, ComponentType, ReactNode, Suspense, lazy } from "react";

// 3D is decoration: if a chunk fails to load or WebGL is unavailable, render nothing
// rather than taking the whole page down with it.
class CanvasBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("3D scene failed to load:", error);
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

// Loaded on demand so three.js stays out of the main bundle and text paints first.
const lazyCanvas = (load: () => Promise<{ default: ComponentType }>) => {
  const Scene = lazy(load);
  const SafeCanvas = () => (
    <CanvasBoundary>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </CanvasBoundary>
  );
  return SafeCanvas;
};

const EarthCanvas = lazyCanvas(() => import("./Earth"));
const ComputersCanvas = lazyCanvas(() => import("./Computers"));
const StarsCanvas = lazyCanvas(() => import("./Stars"));

export { EarthCanvas, ComputersCanvas, StarsCanvas };
