function NavigationButton ({onEvent, children}) {

  return (
    <button className="navigationButton" onClick={onEvent}>
      {children}
    </button>
  )
}

export default NavigationButton;