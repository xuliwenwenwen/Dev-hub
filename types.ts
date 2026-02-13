import React from 'react';

export type ViewState = 
  | 'home' 
  | 'get-started' 
  | 'data-apps' 
  | 'ai-apps' 
  | 'migration' 
  | 'run-optimize' 
  | 'learn';

export interface NavItem {
  id: ViewState;
  label: string;
}

export interface ResourceLink {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
}