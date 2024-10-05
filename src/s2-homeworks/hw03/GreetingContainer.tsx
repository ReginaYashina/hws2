import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'


type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (error: string | null) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    if(name.trim() !== ''){
        addUserCallback(name.trim())
        setName('')
    }else {
        setError('Ошибка! Введите имя!')
        setName(name)
    }
    //
    // name.trim() === '' ?  setError('Ошибка! Введите имя!') : addUserCallback(name.trim())
    // setName(name)
}

export const pureOnBlur = (name: string, setError: (error: string | null) => void) => { // если имя пустое - показать ошибку
    name.trim() === '' &&  setError('Ошибка! Введите имя!')
}

export const pureOnEnter = (e: React.KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
   if (e.key === 'Enter'){
       addUser()
   }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value.trim()) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length
    const lastUserName = name.trim()

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
