import { component$, useSignal } from '@builder.io/qwik';

// Example component to use the in the drag and drop editor
// https://www.builder.io/c/docs/custom-components-setup
export const MyFunComponent = component$((props: { text: string, content: string }) => {

  return (
    <div>
      <h3>{props.text.toUpperCase()}</h3>
      <p>{props.content}</p>


    </div>
  );
});
