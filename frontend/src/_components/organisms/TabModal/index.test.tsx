// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react'
import HistoryTabModal from '.'
import { TabModal } from '../../../constants'

test('tab modal should be displayed', () => {
  render(
    <HistoryTabModal tabModel={TabModal} isOpen modalTitle="Change History" />
  )
  const tabModal = screen.getByTestId('tabModel')
  expect(tabModal).toBeVisible()
})
