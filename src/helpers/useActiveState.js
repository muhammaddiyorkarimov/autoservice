import { useState } from 'react';

export function useActiveState() {
  const [active, setActive] = useState('');
  const [activeLink, setActiveLink] = useState('active');

  const toggleActive = () => {
    setActive(prev => (prev === '' ? 'active' : ''));
  };

  const toggleLinkActive = () => {
    setActiveLink(prev => (prev === '' ? 'active' : ''));
  };

  return { active, toggleActive, activeLink, toggleLinkActive };
}
