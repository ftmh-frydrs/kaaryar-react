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

      <Button as="a" href="https://google.com" target="_blank" look={Button.LOOKS.DARK}>
        Go to google.com in a new tab!
      </Button>
      <Button
        type="submit"
        variant={Button.VARIANTS.FILLED}
        look={Button.LOOKS.WARNING}
        onClick={someHandler}
        disabled
      >
        Disabled Submit
      </Button>
      <Button variant={Button.VARIANTS.OUTLINED} look={Button.LOOKS.SUCCESS} size={Button.SIZES.LARGE}>
        Click me!
      </Button>
    </div>
  );
};

export default App;
