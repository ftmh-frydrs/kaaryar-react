import React from 'react';
import Button from './components/Button';

const App = () => {
  const someHandler = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <div>
        <Button variant={Button.VARIANTS.FILLED} look={Button.LOOKS.PRIMARY}>
          PRIMARY
        </Button>
        <Button variant={Button.VARIANTS.FILLED} look={Button.LOOKS.SECONDARY}>
          SECONDARY
        </Button>
        <Button variant={Button.VARIANTS.FILLED} look={Button.LOOKS.SUCCESS}>
          SUCCESS
        </Button>
        <Button variant={Button.VARIANTS.FILLED} look={Button.LOOKS.DANGER}>
          DANGER
        </Button>
        <Button variant={Button.VARIANTS.FILLED} look={Button.LOOKS.WARNING}>
          WARNING
        </Button>
        <Button variant={Button.VARIANTS.FILLED} look={Button.LOOKS.INFO}>
          INFO
        </Button>
      </div>

      <div>
        <Button variant={Button.VARIANTS.OUTLINED} look={Button.LOOKS.PRIMARY}>
          PRIMARY
        </Button>
        <Button variant={Button.VARIANTS.OUTLINED} look={Button.LOOKS.SECONDARY}>
          SECONDARY
        </Button>
        <Button variant={Button.VARIANTS.OUTLINED} look={Button.LOOKS.SUCCESS}>
          SUCCESS
        </Button>
        <Button variant={Button.VARIANTS.OUTLINED} look={Button.LOOKS.DANGER}>
          DANGER
        </Button>
        <Button variant={Button.VARIANTS.OUTLINED} look={Button.LOOKS.WARNING}>
          WARNING
        </Button>
        <Button variant={Button.VARIANTS.OUTLINED} look={Button.LOOKS.INFO}>
          INFO
        </Button>
      </div>

      <Button size={Button.SIZES.LARGE}>
        Button lg
      </Button>
      <Button as="a" href="https://google.com" target="_blank">
        Button
      </Button>
      <Button
        type="submit"
        onClick={someHandler}
        disabled
        size ={Button.SIZES.SMALL}
      >
        Disabled
      </Button>
    </div>
  );
};

export default App;
