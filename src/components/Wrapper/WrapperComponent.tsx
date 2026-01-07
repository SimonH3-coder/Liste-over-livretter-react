interface WrapperInterface {
  textvalue: string;
}

export function WrapperComponent({ textvalue }: WrapperInterface) {
  function handleClick() {
    alert(`this wrapper component alert: ${textvalue}`);
  }
  return (
    <div className={`py-2 border-2 my-2 font-bold`} onClick={handleClick}>
      {textvalue}
    </div>
  );
}
