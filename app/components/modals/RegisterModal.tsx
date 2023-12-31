'use client'
import React, { useState } from 'react'

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import axios from 'axios'
import Modal from './Modal'
function RegisterModal() {
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)
  const {
    // register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    axios
      .post('/api/register', data)
      .then(() => {
        registerModal.onClose()
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}

export default RegisterModal
