import React, { ReactNode, Suspense } from "react";
import { ErrorInfo } from "react-dom/client";
import { Loader } from "shared/ui/Loader";
import { PageError } from "widgets/PageError";

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }
  
  render() {
    const {hasError} = this.state
    const {children} = this.props
    if (hasError) {
      return <Suspense fallback={<Loader />}><PageError /></Suspense>;
    }
  
    return children; 
  }
}