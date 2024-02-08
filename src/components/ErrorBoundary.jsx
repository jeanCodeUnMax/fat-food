import { Component } from "react";

export default  class ErrorBoundary extends Component {
  constructor(props) {
    super(props); 
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // met à jour l'état pour que le prochain rendu affiche une 
    // UI de secours. 
    return { hasError: true }
  }

  

  render() {
    if (this.state.hasError) {
      // vous pouvez affichier n'importe  quele UI de secours 
      return this.props.fallback;
    }

    return this.props.children; 
  }
}

