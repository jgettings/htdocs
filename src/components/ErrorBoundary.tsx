/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  showErrorMessage?: boolean;
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError && this.props.showErrorMessage) {
      return <h1>Sorry.. there was an error</h1>;
    }
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
