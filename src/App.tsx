import Modal from "react-modal";

import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./Components/NewTransactionModal";

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false)
  }

  return (
    <>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

export default App;
