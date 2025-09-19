export function useTheme() {
  const isDark = useState<boolean>("isDark", () => false);

  const apply = (val: boolean) => {
    if (process.client) {
      document.documentElement.classList.toggle("dark", val);
      localStorage.setItem("theme", val ? "dark" : "light");
    }
  };

  onMounted(() => {
    const saved = process.client ? localStorage.getItem("theme") : null;
    isDark.value = saved ? saved === "dark" : false;
    apply(isDark.value);
  });

  const toggle = () => {
    isDark.value = !isDark.value;
    apply(isDark.value);
  };

  return { isDark, toggle };
}
