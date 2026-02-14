import { fireEvent, render, screen } from '@testing-library/react'
import PostComment from '.'

describe('Teste para o componente PostComment', () => {

  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />)
    expect(screen.getByText('Comentar')).toBeInTheDocument()
  })

  it('Deve adicionar dois comentários', () => {
    render(<PostComment />)

    const comentarioInput = screen.getByTestId('comentario-input')
    const botaoSubmit = screen.getByTestId('submit-btn')

    // Primeiro comentário
    fireEvent.change(comentarioInput, {
      target: { value: 'Primeiro comentário' }
    })
    fireEvent.click(botaoSubmit)

    // Segundo comentário
    fireEvent.change(comentarioInput, {
      target: { value: 'Segundo comentário' }
    })
    fireEvent.click(botaoSubmit)

    // Verifica se os dois aparecem na tela
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
  })

})
