import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'bx5f7v',
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false
  },
});
