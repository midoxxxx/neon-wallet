// @flow
import React from 'react'
import { omit } from 'lodash'

import ConfirmModal from '../../components/Modals/ConfirmModal'
import TokenInfoModal from '../../components/Modals/TokenInfoModal'
import TokenModal from '../../components/Modals/TokenModal'
import TokenSaleModal from '../../components/Modals/TokenSaleModal'
import AddContactModal from '../../components/Modals/AddContactModal'

import { MODAL_TYPES } from '../../core/constants'

const { CONFIRM, SEND, TOKEN_INFO, TOKEN, ICO, ADD_CONTACT } = MODAL_TYPES

const MODAL_COMPONENTS = {
  [CONFIRM]: ConfirmModal,
  [TOKEN_INFO]: TokenInfoModal,
  [TOKEN]: TokenModal,
  [ICO]: TokenSaleModal,
  [ADD_CONTACT]: AddContactModal
}

type Props = {
  modalType?: ModalType,
  modalProps: Object,
  hideModal: () => any,
  showErrorNotification: Object => any,
  showSuccessNotification: Object => any,
  showInfoNotification: Object => any,
  showWarningNotification: Object => any
}

const ModalRenderer = (props: Props) => {
  const { modalType, modalProps } = props

  if (modalType) {
    const Modal = MODAL_COMPONENTS[modalType]
    return (
      <Modal {...modalProps} {...omit(props, ['modalType', 'modalProps'])} />
    )
  }

  return null
}

export default ModalRenderer
