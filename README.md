# Instalação

```shell
npm install use-window-dimensions
------------------------------
yarn add use-window-dimensions
```

# Como usar
- Importe o pacote:

```ts
import useWindowDimension from 'use-window-dimensions';
```

Funcionamento:

```ts
...
const Component: React.FC = () => {
  const { height, width } = useWindowDimensions();
  
  return (
    <div>
      <h1>Height: {height} | Width: {width}</h1>
    </div>
  );
}
```
