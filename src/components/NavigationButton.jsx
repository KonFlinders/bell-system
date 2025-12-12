function NavigationButton ({onEvent, children}) {

  return (
    <button className="NavigationButton" onClick={onEvent}>
      {children}
    </button>
  )
}

export default NavigationButton;