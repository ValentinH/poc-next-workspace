# POC of Yarn workspaces with multiple Next.js apps

This POC shows a repository with 2 Next.js applications and one shared "common" module.
This is done using a Yarn workspace.

## Solved issues

### Intellisense / Auto-imports in VSCode

One issue I faced was having auto-import working in VSCode for items in the `common` folder that were not already used
in the `admin` or `worker` apps.
The key for this was to have the tsconfig files inside the Next.js projects not being called "tsconfig.json" so that
they were not loaded by VSCode. By adding the ".app" suffix and telling Next.js to load it via the `next.config.json`,
it's working as I was expecting at first.

### JSX in "common" lib

By default, Next.js does not transpile libraries in the `node_modules`. However, when using a Yarn workspace,
the shared packages are actually imported from `node_modules`. Therefore, JSX or any non ES syntax is not transpiled.
To solve this, we have to use the `next-transpile-modules` plugin to explicitly transpile the "common" lib.
