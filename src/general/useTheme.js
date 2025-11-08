import { ref, onMounted } from 'vue';

// Variável reativa para rastrear o tema atual
const currentTheme = ref('light'); 

// Função para alternar o tema
export function toggleTheme() {
  const isDark = currentTheme.value === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  currentTheme.value = newTheme;
}

// Função para carregar o tema inicial
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let initialTheme = 'light';
  if (savedTheme) {
    initialTheme = savedTheme;
  } else if (prefersDark) {
    initialTheme = 'dark';
  }
  
  document.documentElement.setAttribute('data-theme', initialTheme);
  currentTheme.value = initialTheme;
}

// Composable principal
export function useTheme() {
  // Garante que o tema seja carregado apenas uma vez
  onMounted(() => {
    loadTheme();
  });

  return {
    currentTheme,
    toggleTheme,
  };
}