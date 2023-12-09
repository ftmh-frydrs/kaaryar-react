export function readJSON(key) {
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error);
  }
  return null;
}

export function writeJSON(key, data) {
  try {
    const value = JSON.stringify(data);
    localStorage.setItem(key, value);
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
}
