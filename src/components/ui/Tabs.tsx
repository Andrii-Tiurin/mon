import React from 'react';
import { motion } from 'framer-motion';

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

interface TabsListProps {
  children: React.ReactNode;
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ value, onValueChange, children }) => {
  return (
    <div className="space-y-4">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, onValueChange });
        }
        return child;
      })}
    </div>
  );
};

export const TabsList: React.FC<TabsListProps> = ({ children }) => {
  return (
    <div className="flex space-x-1 border-b">
      {children}
    </div>
  );
};

export const TabsTrigger: React.FC<TabsTriggerProps & { value?: string; onValueChange?: (value: string) => void }> = ({
  value,
  children,
  onValueChange
}) => {
  const isActive = value === onValueChange;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onValueChange?.(value)}
      className={`px-4 py-2 text-sm font-medium rounded-t-lg relative ${
        isActive
          ? 'text-blue-600 border-b-2 border-blue-600'
          : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {children}
    </motion.button>
  );
};

export const TabsContent: React.FC<TabsContentProps & { value: string }> = ({
  value: tabValue,
  value: currentValue,
  children
}) => {
  if (tabValue !== currentValue) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="pt-4"
    >
      {children}
    </motion.div>
  );
};