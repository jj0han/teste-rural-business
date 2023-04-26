import React from 'react'
import InputComponent from './inputs/InputComponent'

function UserInfo({ formik, formikValues, formikErrors }) {

  return (
    <>
      {/* Form */}
      <div className='flex flex-col'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='w-full'>
            <div className='flex gap-x-4'>
              <InputComponent
                label={"Nome"}
                name={"nome"}
                placeholder={"Digite seu nome"}
                type='text'
                formik={formik}
                formikValue={formikValues.nome}
                formikError={formikErrors.nome}
              />
              <InputComponent
                label={"Sobrenome"}
                name={"sobrenome"}
                placeholder={"Digite seu Sobrenome"}
                type='text'
                formik={formik}
                formikValue={formikValues.sobrenome}
                formikError={formikErrors.sobrenome}
              />
            </div>
            <InputComponent
              label={"CPF"}
              name={"cpf"}
              placeholder={"Somente números"}
              type='text'
              formik={formik}
              formikValue={formikValues.cpf}
              formikError={formikErrors.cpf}
            />
            <InputComponent
              label={"Email"}
              name={"email"}
              placeholder={"seu@email.com"}
              type='email'
              formik={formik}
              formikValue={formikValues.email}
              formikError={formikErrors.email}
            />
            <InputComponent
              label={"Celular"}
              name={"celular"}
              placeholder={"(00)900000000"}
              type='tel'
              formik={formik}
              formikValue={formikValues.celular}
              formikError={formikErrors.celular}
            />
            <InputComponent
              label={"CEP"}
              name={"cep"}
              placeholder={"79000000"}
              type='text'
              formik={formik}
              formikValue={formikValues.cep}
              formikError={formikErrors.cep}
            />
          </div>
          <div className='w-full'>
            <InputComponent
              label={"Rua"}
              name={"logradouro"}
              placeholder={"Digite o nome da sua rua/avenida"}
              type='text'
              formik={formik}
              formikValue={formikValues.logradouro}
              formikError={formikErrors.logradouro}
            />
            <InputComponent
              label={"Número"}
              name={"numero"}
              placeholder={"000"}
              type='text'
              formik={formik}
              formikValue={formikValues.numero}
              formikError={formikErrors.numero}
            />
            <InputComponent
              label={"Complemento"}
              name={"complemento"}
              placeholder={"Ponto de referência"}
              type='text'
              formik={formik}
              formikValue={formikValues.complemento}
              formikError={formikErrors.complemento}
            />
            <InputComponent
              label={"Bairro"}
              name={"bairro"}
              placeholder={"Digite seu o nome do seu bairro"}
              type='text'
              formik={formik}
              formikValue={formikValues.bairro}
              formikError={formikErrors.bairro}
            />
            <InputComponent
              label={"Estado"}
              name={"uf"}
              placeholder={"Estado"}
              type='text'
              formik={formik}
              formikValue={formikValues.uf}
              formikError={formikErrors.uf}
            />
            <InputComponent
              label={"Cidade"}
              name={"localidade"}
              placeholder={"Cidade"}
              type='text'
              formik={formik}
              formikValue={formikValues.localidade}
              formikError={formikErrors.localidade}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserInfo