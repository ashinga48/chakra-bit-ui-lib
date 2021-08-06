# Resanec UI Library documentation

This library is aims to provider molecular components required for resanec service provider module.
It later delivers components to module federated UI application (either SSR / SPA Nextjs)

# Core Frameworks

- Chakra UI - [check here](https://chakra-ui.com/)
  ```
  Accessibility, Themeable, Composable, DX
  ```
- Module Federation - for NextJS imports [check here](https://thekevinwang.com/2021/03/26/micro-frontends-nextjs/)
  ```
  
  ```
- Bit Component Management [check here](https://harmony-docs.bit.dev/getting-started/initializing-workspace/)
  ```
  Modular components
  ```

# Working with bit

## Install

1. Install bvm
2. Install bit


## Start workspace
Run
```
bit install  // at src root
bit start   // then open http://localhost:3000
```
http://localhost:3000


## Create Components

Example

```
bbit create react-component ui/button

the following 1 component(s) were created
resanec/ui/button
    location: resanec/ui/button
    env:      teambit.react/react
```

Read more about scopes, component management in bit.dev documentation

## Commit