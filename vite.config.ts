import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Plugin to stub out Figma Make's virtual "figma:asset/*" imports
// so the project builds cleanly outside of the Figma Make environment
// (e.g. GitHub Actions / GitHub Pages).
function figmaAssetStubPlugin() {
  return {
    name: 'figma-asset-stub',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        return '\0figma-asset-stub:' + id
      }
    },
    load(id: string) {
      if (id.startsWith('\0figma-asset-stub:')) {
        // Return an empty string so `import img from "figma:asset/..."` yields ""
        return 'export default "";'
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetStubPlugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  base: "/",
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})