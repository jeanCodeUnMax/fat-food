// /* eslint-disable no-unused-vars */
// import { Component } from "react";
// import "./css/ErrorBoundary.css";
// import { propTypes } from "react-bootstrap/esm/Image";

// export default  class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props); 
//     this.state = { hasError: false }
//   }

//   static getDerivedStateFromError(error) {
//     // met à jour l'état pour que le prochain rendu affiche une 
//     // UI de secours. 
//     return { hasError: true }
//   }

  

//   render() {
//     if (this.state.hasError) {
//       // vous pouvez affichier n'importe  quele UI de secours 
//       return this.props.fallback;
//     }

//     return this.props.children; 
//   }
// }

// ErrorBoundary.propTypes = {
//    fallback: propTypes.node.isRequired,
//    children: propTypes.array.isRequired,

// }


import { Component } from "react"; // Importez React depuis "react" pour utiliser des composants React
import PropTypes from "prop-types"; // Importez PropTypes depuis "prop-types" pour définir les types de prop
import "./css/ErrorBoundary.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Utilisez la méthode componentDidCatch pour gérer les erreurs survenues dans les composants enfants
  componentDidCatch(error, info) {
    // Enregistrez l'erreur dans un gestionnaire de journalisation ou dans un service de suivi des erreurs
    console.error("Error caught by ErrorBoundary:", error, info);
    // Mettez à jour l'état pour afficher le message d'erreur dans l'interface utilisateur
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Affichez un message d'erreur ou un composant de secours lorsque une erreur est survenue
      return this.props.fallback || <div>Something went wrong.</div>;
    }

    // Renvoie les composants enfants normalement s'il n'y a pas d'erreur
    return this.props.children;
  }
}

// Définissez les types de prop pour le composant ErrorBoundary
ErrorBoundary.propTypes = {
  fallback: PropTypes.node, // Le fallback doit être un élément React valide
  children: PropTypes.node, // Les enfants doivent être fournis et être des éléments React valides
};

export default ErrorBoundary;

