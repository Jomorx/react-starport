## react-starport-comp

### Usage
### install
```bash
pnpm i react-starport-comp
```
####  StarportScope
in main.tsx

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { StarportScope } from "react-starport-comp";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <StarportScope>
      <App />
    </StarportScope>
  </HashRouter>
);
```
#### ProxyContainer
carry your component to do animation

```tsx
/**
   deActiveStyle: the style that the component unmount style
   duration: the component translation duration
   RenderSlot: the component that you want to carrier
   port: the port with ProxyItem
 */
<ProxyContainer
  deActiveStyle={{
    top: 0,
    left: 0,
    transform: "scale(0)",
    pointerEvents: "none",
    transition: `all 0.5s linear`,
  }}
  duration={5000}
  RenderSlot={TheImage}
  port={index}
  key={index}
/>
```
#### ProxyItem
your component to do animation

```tsx
/**
   renderProps: the component receive props
   port: the port with ProxyContainer
 */
      <ProxyItem
        port={id}
        key={id}
        renderProps={{
          onClick: () => {
            navigate(`/detail/${id}`);
          },
          src: imageArr[id],
          style: { width: "500px", height: "150px" },
        }}
      ></ProxyItem>
```
### Todo
- [ ] auto register ProxyContainer 