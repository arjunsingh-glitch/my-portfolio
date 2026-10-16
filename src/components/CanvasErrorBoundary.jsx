import { Component } from 'react'

/**
 * Keeps a crashed WebGL canvas from taking the whole page down.
 * Renders `fallback` (default: nothing) instead of the broken canvas.
 */
export default class CanvasErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('[CanvasErrorBoundary] WebGL canvas failed:', error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null
    }
    return this.props.children
  }
}
