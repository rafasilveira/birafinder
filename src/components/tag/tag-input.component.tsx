import { FC, useState } from 'react'
import { Tag } from '.'
import { AddSvg } from '../../assets'
import { CheckSvg } from '../../assets/check.svg'
import { Input } from '../input/input.component'
import { ITagProps } from './tag.interface'
import { TagStyled } from './tag.style'

interface ITagInputProps extends Omit<ITagProps, 'text'> {
  onSubmitText: (text: string) => void
  typedText: string
  placeholder?: string
}

const RegularTag: FC<{ text: string }> = ({ text }) => <Tag text={text} />

const ButtonTag: FC<{
  placeholder: string
  handleClick: () => void
}> = ({ placeholder, handleClick }) => (
  <Tag onClick={() => handleClick?.()} icon={<AddSvg />} text={placeholder} />
)

const InputTag: FC<{
  text: string
  title: string
  handleChange: (text: string) => void
  handleConfirm: () => void
}> = ({ text, title, handleChange, handleConfirm }) => {
  return (
    <TagStyled>
      <button className="button-confirm" onClick={handleConfirm}>
        <CheckSvg />
      </button>
      <Input
        type="text"
        fieldSize="small"
        title={title}
        value={text}
        onChange={(e) =>
          handleChange(e.target.value.replace(/[^a-z0-9 ]/i, ''))
        }
      />
    </TagStyled>
  )
}

/**
 * There's three possible states
 *  - button: it's a button, reveals input when clicked
 *  - input: it's an input, saves text when icon is clicked
 *  - regular: it's a regular tag without icon
 */
export const TagInputComponent: FC<ITagInputProps> = ({
  typedText,
  onSubmitText,
  placeholder = 'Add more',
}) => {
  const [fieldState, setFieldState] = useState<'button' | 'input' | 'regular'>(
    'button'
  )

  const [text, setText] = useState(typedText)

  // button -> input
  const handleClickTagButton = () => {
    console.log('click tag button')
    setFieldState('input')
  }

  // input -> regular
  const handleConfirmTagInput = () => {
    onSubmitText(text)
    setFieldState('regular')
  }

  switch (fieldState) {
    case 'regular':
      return <RegularTag text={text} />
    case 'input':
      return (
        <InputTag
          text={text}
          handleChange={setText}
          handleConfirm={handleConfirmTagInput}
          title={placeholder}
        />
      )
    case 'button':
    default:
      return (
        <ButtonTag
          placeholder={placeholder}
          handleClick={handleClickTagButton}
        />
      )
  }
}
