'use client'

import 'rsuite/Popover/styles/index.css';
import { Button, Popover, Whisper } from 'rsuite';
import { CheckSquare, PlusCircle, } from '@phosphor-icons/react';
import { Twirl as Hamburger } from 'hamburger-react'
import { useRef, useState } from 'react';
import ModalComponent from '@/app/components/Modal';

type RefProps = {
  close: () => void
}


const Menu = () => {
  const [isModalActive, setIsModalActive] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const [open, setOpen] = useState(false);
  const [backdrop, setBackdrop] = useState('static');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const whisperRef = useRef<RefProps>()




  function handleCreateModal(e: React.FormEvent) {
    e.preventDefault()

    if (!whisperRef.current) {
      throw Error()
    }

    setMenuOpen(!isMenuOpen)
    whisperRef.current.close()

    handleOpen()

  }


  const speaker = (
    <Popover style={{ padding: 20 }} >
      <button onClick={handleCreateModal} className='p-2 bg-green-500 rounded-lg mr-2 '><PlusCircle size={30} color='#fff' /></button>
      <button className='p-2 bg-blue-500 rounded-lg ml-2 '><CheckSquare size={30} color='#fff' /></button>
    </Popover>
  );

  return (
    <div className="relative"  >
      <ModalComponent open={open} onClose={handleClose} />

      <Whisper
        placement="left"
        trigger="click"
        speaker={speaker}
        ref={whisperRef}

      >
        <Button ><Hamburger toggled={isMenuOpen} toggle={setMenuOpen} size={30} /></Button>
      </Whisper>


    </div >
  )
}

export default Menu
