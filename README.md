# Instalação

# Como usar
- Importe o pacote:

```ts
import useWindowDimension from 'useWindowDimensions';
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
