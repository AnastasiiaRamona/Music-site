type SpecialButtonProps = {
    text: string
}

export default function SpecialButton(props: SpecialButtonProps) {
    return <div>
      <button onClick={() => alert('hi')}>{props.text}</button>
    </div>
  }