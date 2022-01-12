export function FancyBorder(props) {
  return (
    <div className={`fancyborder fancyborder-${props.color}`}>
      {props.children}
    </div>
  )
}

export function Dialog(props) {
  return (
    <div>
      <FancyBorder>
        <h1>{props.title}</h1>
        <p>{props.message}</p>
      </FancyBorder>
    </div>
  )
}

export function WelcomeDialog() {
  return (
    <>
      <FancyBorder color="red">
        <h1>bienvenu</h1>
        <p>nous vous prions de visiter notre site</p>
      </FancyBorder>
      <Dialog title="contact session" message="my contact is"/>
    </>
  )
}

export function SplitSpane(props) {
  return (
    <div className="splitspane">
      <div className="split-left">{props.left}</div>
      <div className="split-right">{props.right}</div>
    </div>
  )
}

export function Apps() {
  return (
    <SplitSpane 
      left={<WelcomeDialog/>}
      right={
        (
          <div>
            <h1>contact</h1>
            <p>number 222222222</p>
          </div>
        )
      }
    />
  );
}