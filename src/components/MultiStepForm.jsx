import React, { useState, useEffect } from 'react'
import { useFormik } from "formik"
import { UserInfo, PaymentMethod, Plan, Finish } from '.'

const MultiStepForm = () => {
    const [page, setPage] = useState(0)
    const [cep, setCep] = useState({
        logradouro: "",
        bairro: "",
        uf: "",
        localidade: "",
    })
    const titles = ["Escolha seu Plano", "Faça seu Cadastro", "Método de Pagamento"]
    const subTitles = ["Escolha o plano mais adequado a você", "Informe os campos abaixo", "Plano Selecionado"]
    const plans = [
        {
            id: 1,
            title: "Plano Básico",
            monthPrice: "9,90",
            semestralPrice: "59,90",
            anualPrice: "118,40",
            color: "#0284c7"
        },
        {
            id: 2,
            title: "Plano Top",
            monthPrice: "19,90",
            semestralPrice: "119,90",
            anualPrice: "238,80",
            color: "#64b514"
        },
        {
            id: 3,
            title: "Plano Leite",
            monthPrice: "29,90",
            semestralPrice: "179,40",
            anualPrice: "358,80",
            color: "#ffe600"
        },
    ]
    const [selectedPlan, setSelectedPlan] = useState(0)

    const formik = useFormik({
        initialValues: {
            nome: "",
            sobrenome: "",
            cpf: "",
            email: "",
            celular: "",
            cep: "",
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            uf: "",
            localidade: "",
        },
        onSubmit: (values) => {
            console.log(values)
            setPage((prevPage) => prevPage + 1)
        },
        validate: (values) => {
            const errors = {}
            if (page == 1) {
                if (!values.nome) {
                    errors.nome = "Digite seu nome"
                }

                if (!values.sobrenome) {
                    errors.sobrenome = "Digite seu sobrenome"
                }

                if (!values.cpf) {
                    errors.cpf = "Digite seu CPF"
                } else if (!/^\d{11}$/.test(values.cpf)) {
                    errors.cpf = "Digite um CPF válido. Somente números."
                }

                if (!values.email) {
                    errors.email = "Digite seu email"
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
                    errors.email = "Digite um endereço de email válido"
                }

                if (!values.celular) {
                    errors.celular = "Digite um número de celular"
                } else if (!/^\(\d{2}\)\d{9}$/.test(values.celular)) {
                    errors.celular = "Digite um número válido. Ex.: (67)987891122"
                }

                if (!values.cep) {
                    errors.cep = "Digite seu CEP"
                } else if (!/^\d{5}-?\d{3}$/.test(values.cep)) {
                    errors.cep = "Digite um CEP válido. Ex.: 79115353 ou 79115-353"
                }

                if (!values.logradouro) {
                    errors.logradouro = "Digite seu logradouro"
                }

                if (!values.numero) {
                    errors.numero = "Digite o número da sua casa/apartamento"
                } else if (!/^\d+$/.test(values.numero)) {
                    errors.numero = "Digite somente números"
                }

                if (!values.complemento) {
                    errors.complemento = "Digite o complemento. Ex.: Na esquina com a Av.Principal"
                }

                if (!values.bairro) {
                    errors.bairro = "Digite o nome do seu bairro"
                }

                if (!values.uf) {
                    errors.uf = "Digite o nome do seu estado"
                }

                if (!values.localidade) {
                    errors.localidade = "Digite o nome da sua cidade"
                }

            }
            return errors
        },
    })

    useEffect(
        () => {
            fetch(`https://viacep.com.br/ws/${formik.values.cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    setCep(data)
                    formik.values.logradouro = data.logradouro
                    formik.values.bairro = data.bairro
                    formik.values.uf = data.uf
                    formik.values.localidade = data.localidade
                })
        }, [formik.values.cep.split("").length >= 8])

    const currentPage = () => {
        switch (page) {
            case 0:
                return <Plan setPage={setPage} plans={plans} setSelectedPlan={setSelectedPlan} />
            case 1:
                return <UserInfo formik={formik} formikValues={formik.values} formikErrors={formik.errors} />
            case 2:
                return <PaymentMethod plans={plans} selectedPlan={selectedPlan} />
            case 3:
                return <Finish />
            default:
                break
        }
    }

    const displayButtons = () => {
        if (page == 1 || page == 2) {
            return (
                <div className='flex w-full items-end justify-between mt-10'>
                    <button disabled={page == 0} onClick={() => setPage((prevPage) => prevPage - 1)} className='cursor-pointer text-sky-600 font-semibold py-3 px-6 rounded-full transition-all ease-in-out duration-200 hover:text-sky-300'>Voltar</button>
                    <button type='submit' disabled={page == titles.length} onClick={formik.handleSubmit} className='cursor-pointer bg-sky-600 text-white font-semibold py-3 px-6 rounded-full transition-all ease-in-out duration-200 hover:shadow-lg hover:shadow-sky-200'>{page === 2 ? "Finalizar" : "Próximo"}</button>
                </div>
            )
        }
    }

    return (
        <>
            <main className='flex flex-col justify-center items-center w-full'>
                <div className='bg-white w-full max-w-5xl p-5 mb-5 sm:w-full sm:h-min md:w-2/3 md:h-min lg:w-3/4 rounded-lg md:border border-gray-300'>
                    <div className='w-full mb-2'>
                        <div style={{ width: page === 0 ? "0%" : page === 1 ? "33.33%" : page === 2 ? "66.66%" : page === 3 ? "100%" : 0 }} className='transition-all duration-300 h-2 bg-sky-600 rounded-full' />
                    </div>
                    <div className='py-3 mb-3' style={{ textAlign: page == 0 ? "center" : "left" }}>
                        <h1 className='text-black text-4xl font-semibold mb-2'>{titles[page]}</h1>
                        <p className='text-gray-500 text-lg'>{subTitles[page]}</p>
                    </div>
                    {currentPage()}
                    {/* Se page = 0 não mostra os botôes */}
                    {displayButtons()}
                </div>
            </main>
        </>
    )
}

export default MultiStepForm