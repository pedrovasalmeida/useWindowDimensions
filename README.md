# Hook use-window-dimensions

Um hook para receber, em tempo real, os tamanhos horizontal e vertical da tela.

<br/>

## Instalação  

<br/>

-  npm:

```shell
npm install use-window-dimensions
```
- yarn:  
  
```shell
yarn add use-window-dimensions
```

## Como usar

<br/>

```ts
import React from 'react';

import useWindowDimension from 'use-window-dimensions';

const Component: React.FC = () => {
  const { width, height } = useWindowDimensions();

  console.log("width: " + width + "height: " + height);
  
  return (
    <div>
      <h1>Height: {width} | Width: {height}</h1>
    </div>
  );
}
```
