// Example usage in a component
import { useTheme } from '../context/ThemeContext';

const MyComponent = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  
  return (
    <div className="my-component" data-theme={theme}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};