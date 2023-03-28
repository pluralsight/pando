import {
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
  memo,
} from 'react'
import { createPortal } from 'react-dom'
import { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'
import { CloseIcon } from '@pluralsight/icons'
import {
  getButtonProps,
  getIconButtonProps,
  getIconProps,
  getModalProps,
  getJSModalProps,
} from '../../../src'

function ModalDialog(props, triggerRef) {
  const { onClose, ...modalProps } = props
  const wrapperRef = useRef(null)
  const modal = getModalProps(modalProps)
  const iconButtonProps = getIconButtonProps(modal.cancelBtnOptions)
  const { ref, onKeyDown } = useFocusTrap(triggerRef)

  function handleBackdropClick(event) {
    event.stopPropagation()

    if (wrapperRef.current === event.target) {
      onClose()
    }
  }

  useEscToClose(onClose)

  return (
    <div {...modal.backdrop}>
      <div {...modal.focusGuard} />

      <div {...modal.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>
        <section {...modal.section} ref={ref} onKeyDown={onKeyDown}>
          <header>
            <h6 {...modal.heading}>Test modal</h6>
          </header>
          <div {...modal.body}>
            <p>
              This is an example modal body that has some really long content
              because the copy writer is not good and has to say a lot.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              dapibus libero lectus, at lobortis orci lobortis quis. Maecenas
              venenatis <a href="">sed orci ut consequat</a>. Vestibulum sed
              placerat eros. Maecenas ut elit quis purus lobortis tempor a in
              orci. Mauris at nibh tempus, pharetra nibh sed, ornare justo.
              Donec et molestie orci. Aliquam bibendum varius nibh, quis
              malesuada enim lacinia quis. Integer purus nibh, mattis sed mauris
              nec, sollicitudin pretium elit. Suspendisse potenti. Suspendisse
              leo risus, tempor egestas molestie at, tempor quis ipsum. Vivamus
              sed consequat nunc, et hendrerit libero. Mauris luctus nisi id
              lacus ultricies tristique. Sed sit amet egestas nibh. Nunc nec
              eros ac ligula iaculis rutrum. Curabitur congue tempor felis, sit
              amet semper ligula.
            </p>

            <p>
              Nam at augue magna. Morbi pharetra augue libero, ac tempor odio
              euismod eget. Praesent ac semper felis, sagittis sagittis ligula.
              Duis et mauris lorem. Phasellus viverra libero hendrerit libero
              tristique, eget pulvinar purus congue. Cras vel arcu lectus. Donec
              quis bibendum eros. Suspendisse aliquet cursus arcu, eu
              condimentum nisi euismod eu. Aliquam mattis, ligula et posuere
              placerat, elit erat aliquet eros, et vehicula eros urna at diam.
              Suspendisse id urna et nulla varius faucibus vitae eu quam.
              Integer convallis ex quis elit vulputate lobortis.
            </p>

            <p>
              Morbi posuere luctus pellentesque. Maecenas mattis quam id risus
              tristique, in fermentum nisl congue. Nunc a nunc ultrices,
              tincidunt arcu bibendum, semper ante. Aliquam sodales elit eget
              sem ultricies cursus. Vivamus tempus nunc vel maximus facilisis.
              Donec eros dolor, lobortis ullamcorper convallis et, laoreet ut
              augue. Integer non venenatis erat. Duis a faucibus est. Sed
              sagittis, urna at iaculis varius, tellus ligula laoreet ex, sed
              elementum nisi mi ac risus. Donec at laoreet risus. Nulla a sem
              sed libero maximus ultricies nec vitae sem. Curabitur sagittis
              cursus augue, in rhoncus odio condimentum non. Aenean tristique a
              erat id eleifend. Donec at magna in eros ornare pharetra. Donec
              semper maximus urna, pulvinar finibus nisl dignissim sit amet.
            </p>

            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Duis neque risus, sagittis id felis eu,
              euismod gravida dolor. Sed metus ex, rhoncus ut interdum vitae,
              volutpat condimentum mi. Fusce sit amet lorem quam. Nulla
              consequat pellentesque justo nec eleifend. Phasellus sit amet
              iaculis ipsum. Nulla pretium sodales pretium. Etiam rhoncus lorem
              sed tortor facilisis, porta feugiat eros vestibulum. Nulla tempus
              sapien augue, eu pellentesque odio faucibus ac. Nullam dictum
              mauris tellus, porttitor dapibus tellus tincidunt bibendum.
            </p>

            <p>
              Curabitur fermentum pharetra erat ac volutpat. Quisque feugiat
              pretium nisi, vitae hendrerit lacus tincidunt a. Donec vulputate
              tempor neque tincidunt posuere. Sed eu egestas ipsum. Mauris in
              libero sapien. Pellentesque vel nibh eget nunc dapibus convallis
              in vel ligula. Donec posuere, risus sed consequat eleifend, est
              eros convallis lacus, ut consequat nulla magna eu nisl. Etiam
              mollis rhoncus nunc, id commodo tortor malesuada quis. Curabitur
              ut diam vitae quam tincidunt tempus. Phasellus in sem turpis. Cras
              sem lorem, tincidunt ac nunc in, finibus porta elit. Sed dictum
              congue lorem, et vehicula lacus rutrum sit amet. Vestibulum varius
              vehicula mi a scelerisque. Sed condimentum eros a augue mattis, ut
              egestas ex tincidunt. Aenean volutpat maximus fringilla.{' '}
            </p>
          </div>
          <footer {...modal.buttonWrapper}>
            <button {...iconButtonProps.button} onClick={onClose}>
              <CloseIcon {...getIconProps(iconButtonProps.iconOptions)} />
            </button>
          </footer>
        </section>
      </div>

      <div {...modal.focusGuard} />
    </div>
  )
}

const ModalEl = memo(forwardRef(ModalDialog))

export default function Modal({ logJS }) {
  const triggerRef = useRef(null)
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  function handleShowModal() {
    setShowModal(true)
  }

  useEffect(() => {
    if (logJS) {
      console.log(
        getJSModalProps({
          id: 'sb-id',
          headingId: 'sb-headingId',
          bodyId: 'sb-bodyId',
        })
      )
    }
  }, [logJS])

  return (
    <div id="modal">
      <h3>Modal</h3>
      <div className="App-container">
        <button
          {...getButtonProps().button}
          onClick={handleShowModal}
          ref={triggerRef}
        >
          show modal
        </button>
      </div>

      {showModal &&
        createPortal(
          <ModalEl
            headingId="modal-header"
            bodyId="modal-body"
            id="modal"
            onClose={handleCloseModal}
            ref={triggerRef}
          />,
          document.getElementById('root')
        )}
    </div>
  )
}
