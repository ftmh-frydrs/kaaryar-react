import React from "react";
import Button from "./components/Button";

const App = () => {
  const someHandler = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <div>
        <Button
          variant={Button.VARIANTS.FILLED}
          look={Button.LOOKS.PRIMARY}
          onClick={someHandler}
        >
          ورود
        </Button>
        <Button
          variant={Button.VARIANTS.FILLED}
          look={Button.LOOKS.SECONDARY}
          onClick={someHandler}
        >
          ثبت نام
        </Button>
        <Button
          variant={Button.VARIANTS.FILLED}
          look={Button.LOOKS.SUCCESS}
          onClick={someHandler}
        >
          تایید
        </Button>
        <Button
          variant={Button.VARIANTS.FILLED}
          look={Button.LOOKS.DANGER}
          onClick={someHandler}
        >
          انصراف
        </Button>
        <Button variant={Button.VARIANTS.FILLED} look={Button.LOOKS.WARNING}>
          ثبت
        </Button>
        <Button variant={Button.VARIANTS.FILLED} look={Button.LOOKS.INFO}>
          جدید
        </Button>
      </div>

      <div>
        <Button variant={Button.VARIANTS.OUTLINED} look={Button.LOOKS.PRIMARY}>
          ورود
        </Button>
        <Button
          variant={Button.VARIANTS.OUTLINED}
          look={Button.LOOKS.SECONDARY}
        >
          ثبت نام
        </Button>
        <Button variant={Button.VARIANTS.OUTLINED} look={Button.LOOKS.SUCCESS}>
          تایید
        </Button>
        <Button variant={Button.VARIANTS.OUTLINED} look={Button.LOOKS.DANGER}>
          انصراف
        </Button>
        <Button variant={Button.VARIANTS.OUTLINED} look={Button.LOOKS.WARNING}>
          ثبت
        </Button>
        <Button variant={Button.VARIANTS.OUTLINED} look={Button.LOOKS.INFO} type='reset'>
          جدید
        </Button>
      </div>

      <Button size={Button.SIZES.LARGE}>دکمه لارج</Button>
      <Button as="a" href="https://google.com" target="_blank">
        دکمه
      </Button>
      <Button
        type="submit"
        onClick={someHandler}
        disabled
        size={Button.SIZES.SMALL}
      >
        دکمه اسمال
      </Button>
    </div>
  );
};

export default App;
