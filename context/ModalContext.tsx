'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isSalesModalOpen: boolean;
  openSalesModal: () => void;
  closeSalesModal: () => void;
  isDemoModalOpen: boolean;
  openDemoModal: () => void;
  closeDemoModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openSalesModal = () => setIsSalesModalOpen(true);
  const closeSalesModal = () => setIsSalesModalOpen(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <ModalContext.Provider 
      value={{ 
        isSalesModalOpen, openSalesModal, closeSalesModal,
        isDemoModalOpen, openDemoModal, closeDemoModal 
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
