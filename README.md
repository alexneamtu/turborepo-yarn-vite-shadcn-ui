# 🚀 Turborepo starter with shared shadcn/ui components (Vite). Tailwind 4 support.

[![Build](https://github.com/alexneamtu/turborepo-yarn-vite-shadcn-ui/actions/workflows/build.yml/badge.svg)](https://github.com/alexneamtu/turborepo-yarn-vite-shadcn-ui/actions/workflows/build.yml)
[![Update Dependencies](https://github.com/alexneamtu/turborepo-yarn-vite-shadcn-ui/actions/workflows/update-dependencies.yml/badge.svg)](https://github.com/alexneamtu/turborepo-yarn-vite-shadcn-ui/actions/workflows/update-dependencies.yml)

This repository is a monorepo starter kit utilizing [Turborepo](https://turbo.build/repo) for managing multiple
applications with shared [shadcn/ui](https://github.com/shadcn-ui/ui) components. It includes an application (`web`)
in the `apps/web` directory, which uses shared components from the `@repo/ui` package.

The goal of this repository is to provide an up-to-date starter for vite-react.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 20 or higher)
- [Yarn](https://yarnpkg.com/getting-started/install) (version 4 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alexneamtu/turborepo-yarn-vite-shadcn-ui.git
   cd turborepo-vite-shadcn-ui
   ```

2. Install dependencies using `yarn`:

   ```bash
   yarn install
   ```

3. Build

   ```bash
   yarn build
   ```

4. Develop

   ```bash
   yarn dev
   ```

5. Add new [component](https://ui.shadcn.com/docs/components/tabs)

   ```bash
   yarn ui card
   ```

Enjoy working with your new Turborepo starter kit and feel free to raise a PR! 🎉
